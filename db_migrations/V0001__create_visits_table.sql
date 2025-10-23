CREATE TABLE IF NOT EXISTS visits (
    id SERIAL PRIMARY KEY,
    visitor_id VARCHAR(255) NOT NULL,
    visited_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_agent TEXT,
    ip_address VARCHAR(45)
);

CREATE INDEX idx_visits_visitor_id ON visits(visitor_id);
CREATE INDEX idx_visits_visited_at ON visits(visited_at);
