import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Plant {
  id: number;
  emoji: string;
  x: number;
  y: number;
  size: number;
}

export default function GrowGarden() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [isGrowing, setIsGrowing] = useState(false);

  const plantEmojis = ['🌱', '🌿', '🌻', '🌸', '🌺', '🌷', '🌹', '🌼', '🪴', '🌳'];

  const addPlant = () => {
    const newPlant: Plant = {
      id: Date.now(),
      emoji: plantEmojis[Math.floor(Math.random() * plantEmojis.length)],
      x: Math.random() * 80 + 10,
      y: Math.random() * 70 + 10,
      size: 0,
    };
    setPlants([...plants, newPlant]);
    setIsGrowing(true);
  };

  useEffect(() => {
    if (!isGrowing) return;

    const interval = setInterval(() => {
      setPlants((prev) =>
        prev.map((plant) =>
          plant.size < 1 ? { ...plant, size: plant.size + 0.1 } : plant
        )
      );
    }, 100);

    setTimeout(() => setIsGrowing(false), 1000);

    return () => clearInterval(interval);
  }, [isGrowing]);

  const clearGarden = () => {
    setPlants([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 to-green-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-2">🌱 Вырасти Сад</h1>
          <p className="text-green-700">Нажми кнопку и наблюдай, как растут растения!</p>
        </div>

        <div className="relative bg-gradient-to-b from-green-200 to-green-300 rounded-3xl h-[500px] overflow-hidden border-4 border-green-600 shadow-2xl mb-6">
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-amber-800 to-amber-600"></div>

          {plants.map((plant) => (
            <div
              key={plant.id}
              className="absolute transition-all duration-1000"
              style={{
                left: `${plant.x}%`,
                bottom: `${plant.y}%`,
                transform: `scale(${plant.size})`,
                fontSize: '3rem',
              }}
            >
              {plant.emoji}
            </div>
          ))}

          {plants.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center text-green-600 text-xl opacity-50">
              Сад пуст... начни выращивать!
            </div>
          )}
        </div>

        <div className="flex gap-4 justify-center">
          <Button onClick={addPlant} size="lg" className="bg-green-600 hover:bg-green-700">
            <Icon name="Sprout" className="mr-2" />
            Посадить растение
          </Button>
          <Button onClick={clearGarden} variant="outline" size="lg">
            <Icon name="Trash2" className="mr-2" />
            Очистить сад
          </Button>
        </div>

        <div className="mt-6 text-center text-green-700">
          Растений в саду: <span className="font-bold text-2xl">{plants.length}</span>
        </div>
      </div>
    </div>
  );
}
