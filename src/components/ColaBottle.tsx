
import { motion } from "framer-motion";

interface ColaBottleProps {
  isDrinking: boolean;
}

const ColaBottle = ({ isDrinking }: ColaBottleProps) => {
  return (
    <motion.div
      className="relative w-full h-full"
      animate={
        isDrinking 
          ? { rotate: [0, -30, -30, 0], y: [0, -20, -20, 0] } 
          : { rotate: 0, y: 0 }
      }
      transition={{ duration: 1 }}
    >
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
              {/* Пузырьки */}
              {!isDrinking && (
                <>
                  <motion.div 
                    className="absolute w-2 h-2 bg-white opacity-40 rounded-full"
                    style={{ left: '20%', bottom: '10%' }}
                    animate={{ y: [-10, -40] }}
                    transition={{ repeat: Infinity, duration: 2, repeatType: "loop" }}
                  />
                  <motion.div 
                    className="absolute w-1 h-1 bg-white opacity-40 rounded-full"
                    style={{ left: '50%', bottom: '20%' }}
                    animate={{ y: [-5, -30] }}
                    transition={{ repeat: Infinity, duration: 1.5, repeatType: "loop", delay: 0.5 }}
                  />
                  <motion.div 
                    className="absolute w-1.5 h-1.5 bg-white opacity-40 rounded-full"
                    style={{ left: '70%', bottom: '15%' }}
                    animate={{ y: [-8, -35] }}
                    transition={{ repeat: Infinity, duration: 2.2, repeatType: "loop", delay: 1 }}
                  />
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
        <motion.div 
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-2xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1.2, 1.2, 0.8], y: [-10, -30] }}
          transition={{ duration: 1 }}
        >
          🥤 Глоток!
        </motion.div>
      )}
    </motion.div>
  );
};

export default ColaBottle;
