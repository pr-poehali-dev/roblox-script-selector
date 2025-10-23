import { useState } from 'react';
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
    updated: '2024-10-15'
  },
  {
    id: 2,
    name: 'Owl Hub',
    description: 'Premium script hub with auto-farm features',
    category: 'Hub',
    updated: '2024-10-20'
  },
  {
    id: 3,
    name: 'Arsenal Aimbot',
    description: 'Advanced ESP and aimbot for Arsenal',
    category: 'FPS',
    updated: '2024-10-18'
  },
  {
    id: 4,
    name: 'Blox Fruits Auto Farm',
    description: 'Level up fast with automatic grinding',
    category: 'RPG',
    updated: '2024-10-22'
  },
  {
    id: 5,
    name: 'Synapse X',
    description: 'Level 7 executor with advanced features',
    category: 'Executor',
    updated: '2024-10-19'
  },
  {
    id: 6,
    name: 'Pet Simulator Dupe',
    description: 'Duplicate your pets and gems instantly',
    category: 'Exploit',
    updated: '2024-10-21'
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showScripts, setShowScripts] = useState(false);

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
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]">
            Lua.Roblox.Exploits.Scripts
          </h1>
          <p className="text-xl text-blue-300 font-light tracking-wide">
            Premium scripts & exploits for Roblox
          </p>
        </div>

        <div className="flex gap-4 justify-center mb-12">
          <Button 
            onClick={() => setShowScripts(!showScripts)}
            className="h-14 px-10 text-lg font-semibold bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 border-2 border-purple-400/50 shadow-[0_0_25px_rgba(139,92,246,0.6)] hover:shadow-[0_0_35px_rgba(139,92,246,0.8)] transition-all duration-300"
          >
            <Icon name="List" className="mr-2" size={20} />
            {showScripts ? 'Скрыть скрипты' : 'Список скриптов'}
          </Button>
          <Button 
            onClick={() => setSearchQuery('')}
            className="h-14 px-10 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 border-2 border-blue-400/50 shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:shadow-[0_0_35px_rgba(59,130,246,0.8)] transition-all duration-300"
          >
            <Icon name="Search" className="mr-2" size={20} />
            Искать скрипты
          </Button>
        </div>

        {showScripts && (
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

        {showScripts && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {filteredScripts.map((script, index) => (
                <Card
                  key={script.id}
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
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400 flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {script.updated}
                    </span>
                  </div>
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
      </div>
    </div>
  );
};

export default Index;