
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ColaBottle from "./ColaBottle";
import UpgradeShop from "./UpgradeShop";

const ColaGame = () => {
  const [colas, setColas] = useState(0);
  const [isDrinking, setIsDrinking] = useState(false);
  const [autoClickPower, setAutoClickPower] = useState(0);
  
  const drinkCola = () => {
    if (!isDrinking) {
      setIsDrinking(true);
      setColas(prev => prev + 1);
      
      // Анимация питья длится 1 секунду
      setTimeout(() => {
        setIsDrinking(false);
      }, 1000);
    }
  };

  const buyUpgrade = (cost: number, power: number) => {
    if (colas >= cost) {
      setColas(prev => prev - cost);
      setAutoClickPower(prev => prev + power);
    }
  };

  // Автоматическое увеличение количества банок
  useEffect(() => {
    if (autoClickPower > 0) {
      const interval = setInterval(() => {
        setColas(prev => prev + autoClickPower);
      }, 1000);
      
      return () => clearInterval(interval);
    }
  }, [autoClickPower]);

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-4">
      <h1 className="text-3xl font-bold text-[#D62B1F]">Симулятор Колы</h1>
      
      <div className="text-2xl font-semibold">
        Банок колы: <span className="text-[#D62B1F]">{colas}</span>
      </div>
      
      <div className="relative h-64 w-64 cursor-pointer" onClick={drinkCola}>
        <ColaBottle isDrinking={isDrinking} />
      </div>
      
      <UpgradeShop colas={colas} onBuyUpgrade={buyUpgrade} />
    </div>
  );
};

export default ColaGame;
