
interface UpgradeShopProps {
  colas: number;
  autoClickerLevel: number;
  doubleClickerLevel: number;
  megaClickerLevel: number;
  buyAutoClicker: () => void;
  buyDoubleClicker: () => void;
  buyMegaClicker: () => void;
}

const UpgradeShop = ({
  colas,
  autoClickerLevel,
  doubleClickerLevel,
  megaClickerLevel,
  buyAutoClicker,
  buyDoubleClicker,
  buyMegaClicker
}: UpgradeShopProps) => {
  const autoClickerCost = 10 * (autoClickerLevel + 1);
  const doubleClickerCost = 50 * (doubleClickerLevel + 1);
  const megaClickerCost = 200 * (megaClickerLevel + 1);
  
  return (
    <div className="w-full max-w-md p-4 border-2 border-[#D62B1F] rounded-lg">
      <h2 className="text-2xl font-bold text-[#D62B1F] mb-4">Магазин улучшений</h2>
      
      <div className="space-y-4">
        {/* Автокликер */}
        <div className="flex justify-between items-center p-2 border rounded hover:bg-gray-50">
          <div>
            <h3 className="font-bold">Автокликер</h3>
            <p className="text-sm text-gray-600">+1 банка/сек</p>
            <p className="text-xs">Уровень: {autoClickerLevel}</p>
          </div>
          <button
            className={`px-4 py-2 rounded font-bold ${
              colas >= autoClickerCost ? 'bg-[#D62B1F] text-white' : 'bg-gray-200 text-gray-500'
            }`}
            onClick={buyAutoClicker}
            disabled={colas < autoClickerCost}
          >
            {autoClickerCost} банок
          </button>
        </div>
        
        {/* Удвоитель кликов */}
        <div className="flex justify-between items-center p-2 border rounded hover:bg-gray-50">
          <div>
            <h3 className="font-bold">Удвоитель кликов</h3>
            <p className="text-sm text-gray-600">x2 банок за клик</p>
            <p className="text-xs">Уровень: {doubleClickerLevel}</p>
          </div>
          <button
            className={`px-4 py-2 rounded font-bold ${
              colas >= doubleClickerCost ? 'bg-[#D62B1F] text-white' : 'bg-gray-200 text-gray-500'
            }`}
            onClick={buyDoubleClicker}
            disabled={colas < doubleClickerCost}
          >
            {doubleClickerCost} банок
          </button>
        </div>
        
        {/* Мега кликер */}
        <div className="flex justify-between items-center p-2 border rounded hover:bg-gray-50">
          <div>
            <h3 className="font-bold">Мега кликер</h3>
            <p className="text-sm text-gray-600">+5 банок/сек</p>
            <p className="text-xs">Уровень: {megaClickerLevel}</p>
          </div>
          <button
            className={`px-4 py-2 rounded font-bold ${
              colas >= megaClickerCost ? 'bg-[#D62B1F] text-white' : 'bg-gray-200 text-gray-500'
            }`}
            onClick={buyMegaClicker}
            disabled={colas < megaClickerCost}
          >
            {megaClickerCost} банок
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpgradeShop;
