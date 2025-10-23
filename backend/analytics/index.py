'''
Business: Track website visits and get analytics
Args: event - dict with httpMethod, body, headers
      context - object with request_id attribute
Returns: HTTP response with visit stats
'''
import json
import os
import psycopg2
from typing import Dict, Any
from datetime import datetime, timedelta

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    database_url = os.environ.get('DATABASE_URL')
    if not database_url:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'DATABASE_URL not configured'})
        }
    
    conn = psycopg2.connect(database_url)
    cursor = conn.cursor()
    
    try:
        if method == 'POST':
            body_data = json.loads(event.get('body', '{}'))
            visitor_id: str = body_data.get('visitor_id', 'anonymous')
            user_agent: str = event.get('headers', {}).get('user-agent', '')
            
            cursor.execute(
                "INSERT INTO visits (visitor_id, user_agent, visited_at) VALUES (%s, %s, NOW())",
                (visitor_id, user_agent)
            )
            conn.commit()
            
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'isBase64Encoded': False,
                'body': json.dumps({'success': True, 'message': 'Visit tracked'})
            }
        
        elif method == 'GET':
            cursor.execute("SELECT COUNT(*) FROM visits")
            real_visits = cursor.fetchone()[0]
            total_visits = real_visits + 25611
            
            cursor.execute("SELECT COUNT(DISTINCT visitor_id) FROM visits")
            unique_visitors = cursor.fetchone()[0]
            
            cursor.execute(
                "SELECT COUNT(*) FROM visits WHERE visited_at >= NOW() - INTERVAL '24 hours'"
            )
            real_visits_today = cursor.fetchone()[0]
            visits_today = real_visits_today + 562
            
            cursor.execute(
                "SELECT COUNT(*) FROM visits WHERE visited_at >= NOW() - INTERVAL '7 days'"
            )
            visits_week = cursor.fetchone()[0]
            
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'isBase64Encoded': False,
                'body': json.dumps({
                    'total_visits': total_visits,
                    'unique_visitors': unique_visitors,
                    'visits_today': visits_today,
                    'visits_week': visits_week
                })
            }
        
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    finally:
        cursor.close()
        conn.close()