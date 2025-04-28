
import { Button } from "@/components/ui/button";

interface UpgradeShopProps {
  colas: number;
  onBuyUpgrade: (cost: number, power: number) => void;
}

const UpgradeShop = ({ colas, onBuyUpgrade }: UpgradeShopProps) => {
  const upgrades = [
    { id: 1, name: "Автопитьё", cost: 10, power: 1, description: "Автоматически пьёт 1 банку в секунду" },
    { id: 2, name: "Двойная банка", cost: 50, power: 2, description: "Автоматически пьёт 2 банки в секунду" },
    { id: 3, name: "Кола-машина", cost: 200, power: 5, description: "Автоматически пьёт 5 банок в секунду" },
  ];

  return (
    <div className="w-full max-w-md p-6 bg-slate-50 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-[#D62B1F]">Улучшения</h2>
      
      <div className="flex flex-col gap-3">
        {upgrades.map((upgrade) => (
          <div key={upgrade.id} className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{upgrade.name}</h3>
              <p className="text-xs text-gray-600">{upgrade.description}</p>
            </div>
            <Button 
              variant={colas >= upgrade.cost ? "default" : "secondary"}
              disabled={colas < upgrade.cost}
              onClick={() => onBuyUpgrade(upgrade.cost, upgrade.power)}
              className={colas >= upgrade.cost ? "bg-[#D62B1F] hover:bg-[#B11B0F]" : ""}
            >
              {upgrade.cost} банок
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpgradeShop;
