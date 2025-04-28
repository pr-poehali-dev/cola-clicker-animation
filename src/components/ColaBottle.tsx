
import { useState, useEffect } from "react";

interface ColaBottleProps {
  isDrinking: boolean;
}

const ColaBottle = ({ isDrinking }: ColaBottleProps) => {
  const [animationClass, setAnimationClass] = useState("");
  
  useEffect(() => {
    if (isDrinking) {
      setAnimationClass("animate-drink");
      const timer = setTimeout(() => {
        setAnimationClass("");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isDrinking]);
  
  return (
    <div className={`relative w-full h-full transition-transform duration-1000 ${animationClass}`}>
      {/* Бутылка колы */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Крышка */}
          <div className="absolute w-10 h-3 bg-[#D62B1F] rounded-t-full left-1/2 -top-3 transform -translate-x-1/2"></div>
          
          {/* Горлышко */}
          <div className="absolute w-6 h-6 bg-[#D62B1F] rounded-t-md left-1/2 -top-0 transform -translate-x-1/2"></div>
          
          {/* Тело бутылки */}
          <div className="w-32 h-52 bg-transparent relative overflow-hidden border-4 border-[#D62B1F] rounded-lg">
            {/* Жидкость */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#8B0304] h-3/4 transition-all">
              {/* Пузырьки (статичные) */}
              {!isDrinking && (
                <>
                  <div className="absolute w-2 h-2 bg-white opacity-40 rounded-full animate-bubble-1"
                       style={{ left: '20%', bottom: '10%' }}></div>
                  <div className="absolute w-1 h-1 bg-white opacity-40 rounded-full animate-bubble-2"
                       style={{ left: '50%', bottom: '20%' }}></div>
                  <div className="absolute w-1.5 h-1.5 bg-white opacity-40 rounded-full animate-bubble-3"
                       style={{ left: '70%', bottom: '15%' }}></div>
                </>
              )}
            </div>
            
            {/* Логотип */}
            <div className="absolute text-white font-bold text-sm transform -rotate-90 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
              COLA
            </div>
          </div>
        </div>
      </div>
      
      {/* Анимация питья */}
      {isDrinking && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-2xl animate-drink-text">
          🥤 Глоток!
        </div>
      )}
    </div>
  );
};

export default ColaBottle;
