
import { useState, useEffect } from "react";
import ColaBottle from "./ColaBottle";
import UpgradeShop from "./UpgradeShop";

const ColaGame = () => {
  const [colas, setColas] = useState(0);
  const [isDrinking, setIsDrinking] = useState(false);
  const [autoClickerLevel, setAutoClickerLevel] = useState(0);
  const [doubleClickerLevel, setDoubleClickerLevel] = useState(0);
  const [megaClickerLevel, setMegaClickerLevel] = useState(0);

  const handleDrink = () => {
    if (!isDrinking) {
      setIsDrinking(true);
      
      // Базовое количество колы за клик
      let colaPerClick = 1;
      
      // Умножаем на 2 за каждый уровень удвоителя
      if (doubleClickerLevel > 0) {
        colaPerClick = colaPerClick * (doubleClickerLevel + 1);
      }
      
      setColas(prev => prev + colaPerClick);
      
      setTimeout(() => {
        setIsDrinking(false);
      }, 1000);
    }
  };

  // Эффект для автокликера
  useEffect(() => {
    if (autoClickerLevel > 0 || megaClickerLevel > 0) {
      const totalClicksPerSecond = autoClickerLevel + (megaClickerLevel * 5);
      const interval = setInterval(() => {
        setColas(prev => prev + totalClicksPerSecond);
      }, 1000);
      
      return () => clearInterval(interval);
    }
  }, [autoClickerLevel, megaClickerLevel]);

  // Обработчики покупки улучшений
  const buyAutoClicker = () => {
    const cost = 10 * (autoClickerLevel + 1);
    if (colas >= cost) {
      setColas(prev => prev - cost);
      setAutoClickerLevel(prev => prev + 1);
    }
  };

  const buyDoubleClicker = () => {
    const cost = 50 * (doubleClickerLevel + 1);
    if (colas >= cost) {
      setColas(prev => prev - cost);
      setDoubleClickerLevel(prev => prev + 1);
    }
  };

  const buyMegaClicker = () => {
    const cost = 200 * (megaClickerLevel + 1);
    if (colas >= cost) {
      setColas(prev => prev - cost);
      setMegaClickerLevel(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-[#D62B1F] mb-8">Кола Кликер</h1>
      
      <div className="text-2xl font-bold mb-4">
        Банок колы: {colas.toFixed(0)}
      </div>
      
      <div className="w-64 h-64 mb-8 cursor-pointer" onClick={handleDrink}>
        <ColaBottle isDrinking={isDrinking} />
      </div>
      
      <UpgradeShop 
        colas={colas}
        autoClickerLevel={autoClickerLevel}
        doubleClickerLevel={doubleClickerLevel}
        megaClickerLevel={megaClickerLevel}
        buyAutoClicker={buyAutoClicker}
        buyDoubleClicker={buyDoubleClicker}
        buyMegaClicker={buyMegaClicker}
      />
    </div>
  );
};

export default ColaGame;
