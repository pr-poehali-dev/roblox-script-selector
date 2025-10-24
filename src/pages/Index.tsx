import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const scripts = [
  {
    id: 1,
    name: 'Infinite Yield',
    description: 'Universal admin script with 300+ commands',
    category: 'Admin',
    updated: '2024-10-15',
    script: "loadstring(game:HttpGet('https://raw.githubusercontent.com/EdgeIY/infiniteyield/master/source'))()"
  },
  {
    id: 2,
    name: 'Owl Hub',
    description: 'Premium script hub with auto-farm features',
    category: 'Hub',
    updated: '2024-10-20',
    script: "loadstring(game:HttpGet('https://raw.githubusercontent.com/CriShoux/OwlHub/master/OwlHub.txt'))()"
  },
  {
    id: 3,
    name: 'Arsenal Aimbot',
    description: 'Advanced ESP and aimbot for Arsenal',
    category: 'FPS',
    updated: '2024-10-18',
    script: "loadstring(game:HttpGet('https://raw.githubusercontent.com/tbao143/thaibao/main/TbaoHubArsenal'))()"
  },
  {
    id: 4,
    name: 'Blox Fruits Auto Farm',
    description: 'Level up fast with automatic grinding',
    category: 'RPG',
    updated: '2024-10-22',
    script: "loadstring(game:HttpGet('https://raw.githubusercontent.com/AhmadV99/Main/main/BloxFruit'))()"
  },
  {
    id: 5,
    name: 'Synapse X',
    description: 'Level 7 executor with advanced features',
    category: 'Executor',
    updated: '2024-10-19',
    script: "loadstring(game:HttpGet('https://raw.githubusercontent.com/synapsexus/synapse-x/main/loader'))()"
  },
  {
    id: 6,
    name: 'Pet Simulator Dupe',
    description: 'Duplicate your pets and gems instantly',
    category: 'Exploit',
    updated: '2024-10-21',
    script: "loadstring(game:HttpGet('https://raw.githubusercontent.com/scriptpastebin/raw/main/petsim'))()"
  },
  {
    id: 7,
    name: 'MM2 Autofarm',
    description: 'Automatic farming for Murder Mystery 2',
    category: 'Farm',
    updated: '2024-10-23',
    script: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/nootmaus/IceHubMM2/refs/heads/main/.lua", true))()'
  },
  {
    id: 8,
    name: 'Steal A Brainrot',
    description: 'Advanced script for Steal A Brainrot game',
    category: 'Game',
    updated: '2024-10-23',
    script: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/tienkhanh1/spicy/main/Chilli.lua"))()'
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showScripts, setShowScripts] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showInjectors, setShowInjectors] = useState(false);
  const [selectedScript, setSelectedScript] = useState<string | null>(null);
  const [stats, setStats] = useState({ total_visits: 0, unique_visitors: 0, visits_today: 0, visits_week: 0 });

  useEffect(() => {
    const visitorId = localStorage.getItem('visitor_id') || `visitor_${Date.now()}_${Math.random()}`;
    localStorage.setItem('visitor_id', visitorId);

    fetch('https://functions.poehali.dev/3e527402-e6c4-4b39-8ce9-1afc56b1012b', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ visitor_id: visitorId })
    });

    fetch('https://functions.poehali.dev/3e527402-e6c4-4b39-8ce9-1afc56b1012b')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error('Failed to fetch stats:', err));
  }, []);

  const filteredScripts = scripts.filter(script =>
    script.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800" />
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-400 rounded-full filter blur-[150px] opacity-20" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]">
            Lua.Roblox.Exploits.Scripts
          </h1>
          <p className="text-xl text-blue-300 font-light tracking-wide">
            Premium scripts & exploits for Roblox
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          <div className="bg-black/30 backdrop-blur-md border border-purple-500/30 rounded-lg px-6 py-3">
            <div className="text-center">
              <Icon name="Users" size={20} className="mx-auto mb-1 text-purple-400" />
              <div className="text-2xl font-bold text-white">{stats.total_visits}</div>
              <div className="text-xs text-gray-400">Всего посещений</div>
            </div>
          </div>
          <div className="backdrop-blur-md border border-blue-500/30 rounded-lg px-6 py-3 bg-slate-500">
            <div className="text-center">
              <Icon name="UserCheck" size={20} className="mx-auto mb-1 text-blue-400" />
              <div className="text-2xl font-bold text-white">{stats.unique_visitors}</div>
              <div className="text-xs text-gray-400">Уникальных</div>
            </div>
          </div>
          <div className="bg-black/30 backdrop-blur-md border border-green-500/30 rounded-lg px-6 py-3">
            <div className="text-center">
              <Icon name="TrendingUp" size={20} className="mx-auto mb-1 text-green-400" />
              <div className="text-2xl font-bold text-white">{stats.visits_today}</div>
              <div className="text-xs text-gray-400">За сегодня</div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center mb-12">
          <Button 
            onClick={() => {
              setShowScripts(!showScripts);
              setShowSearch(false);
              setShowInjectors(false);
              setSearchQuery('');
            }}
            className="h-14 px-10 text-lg font-semibold bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 border-2 border-purple-400/50 shadow-[0_0_25px_rgba(139,92,246,0.6)] hover:shadow-[0_0_35px_rgba(139,92,246,0.8)] transition-all duration-300"
          >
            <Icon name="List" className="mr-2" size={20} />
            {showScripts ? 'Скрыть скрипты' : 'Список скриптов'}
          </Button>
          <Button 
            onClick={() => {
              setShowSearch(!showSearch);
              setShowScripts(false);
              setShowInjectors(false);
              setSearchQuery('');
            }}
            className="h-14 px-10 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 border-2 border-blue-400/50 shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:shadow-[0_0_35px_rgba(59,130,246,0.8)] transition-all duration-300"
          >
            <Icon name="Search" className="mr-2" size={20} />
            {showSearch ? 'Скрыть поиск' : 'Искать скрипты'}
          </Button>
          <Button 
            onClick={() => {
              setShowInjectors(!showInjectors);
              setShowScripts(false);
              setShowSearch(false);
              setSearchQuery('');
            }}
            className="h-14 px-10 text-lg font-semibold bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 border-2 border-green-400/50 shadow-[0_0_25px_rgba(34,197,94,0.6)] hover:shadow-[0_0_35px_rgba(34,197,94,0.8)] transition-all duration-300"
          >
            <Icon name="Download" className="mr-2" size={20} />
            {showInjectors ? 'Скрыть' : 'Инжекторы'}
          </Button>
        </div>

        {showSearch && (
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative animate-scale-in">
              <Input
                type="text"
                placeholder="Введите название скрипта..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-14 pl-14 text-lg bg-black/30 border-2 border-purple-500/50 backdrop-blur-md text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
              />
              <Icon
                name="Search"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400"
                size={24}
              />
            </div>
          </div>
        )}

        {(showScripts || (showSearch && searchQuery.trim() !== '')) && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {filteredScripts.map((script, index) => (
                <Card
                  key={script.id}
                  onClick={() => setSelectedScript(selectedScript === script.script ? null : script.script)}
                  className="bg-black/40 backdrop-blur-md border-2 border-purple-500/30 hover:border-blue-400/60 transition-all duration-300 p-6 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:scale-105 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-white">{script.name}</h3>
                    <span className="px-3 py-1 text-xs font-semibold bg-purple-600/50 border border-purple-400/50 rounded-full text-purple-200">
                      {script.category}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4 text-base">{script.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-400 flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {script.updated}
                    </span>
                  </div>
                  {selectedScript === script.script && (
                    <div className="mt-4 p-4 bg-black/60 border border-purple-400/30 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-purple-300 font-semibold">Lua Script:</span>
                        <Button
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigator.clipboard.writeText(script.script);
                          }}
                          className="bg-purple-600/50 hover:bg-purple-500/50 border border-purple-400/50"
                        >
                          <Icon name="Copy" size={14} className="mr-1" />
                          Копировать
                        </Button>
                      </div>
                      <pre className="text-xs text-gray-300 overflow-x-auto whitespace-pre-wrap break-all">{script.script}</pre>
                    </div>
                  )}
                </Card>
              ))}
            </div>

            {filteredScripts.length === 0 && (
              <div className="text-center py-20">
                <Icon name="Search" size={64} className="mx-auto mb-4 text-purple-400/50" />
                <p className="text-xl text-gray-400">Скрипты не найдены</p>
              </div>
            )}
          </>
        )}

        {showInjectors && (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-black/40 backdrop-blur-md border-2 border-green-500/30 hover:border-green-400/60 transition-all duration-300 p-8 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                <div className="text-center">
                  <div className="mb-4">
                    <Icon name="Download" size={48} className="mx-auto text-green-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">Delta Executor</h3>
                  <p className="text-gray-300 mb-6">Мощный инжектор для Roblox с поддержкой скриптов</p>
                  <a 
                    href="https://deltaexecutorapp.com/download/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 border-2 border-green-400/50 shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:shadow-[0_0_30px_rgba(34,197,94,0.7)] transition-all">
                      <Icon name="Download" className="mr-2" size={20} />
                      Скачать Delta
                    </Button>
                  </a>
                </div>
              </Card>

              <Card className="bg-black/40 backdrop-blur-md border-2 border-orange-500/30 hover:border-orange-400/60 transition-all duration-300 p-8 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                <div className="text-center">
                  <div className="mb-4">
                    <Icon name="Download" size={48} className="mx-auto text-orange-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">KRNL</h3>
                  <p className="text-gray-300 mb-6">Стабильный эксплойт с высокой производительностью</p>
                  <a 
                    href="https://krnl.place/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 border-2 border-orange-400/50 shadow-[0_0_20px_rgba(249,115,22,0.5)] hover:shadow-[0_0_30px_rgba(249,115,22,0.7)] transition-all">
                      <Icon name="Download" className="mr-2" size={20} />
                      Скачать KRNL
                    </Button>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;