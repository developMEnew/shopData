import { ShopItem as ShopItemType } from '../models/ShopItem';

interface ShopItemProps {
    item: ShopItemType;
}

export function ShopItem({ item }: ShopItemProps) {
    const profit = item.sellingPrice - item.costPrice;
    const profitPercentage = ((profit / item.costPrice) * 100).toFixed(1);

    return (
        <div className="flex items-center p-4 border-b border-gray-200">
            <img 
                src={item.imageUrl} 
                alt={item.name} 
                className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="ml-4 flex-grow">
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p className="text-gray-600">{item.description}</p>
                <div className="mt-2 flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-500">Cost: ${item.costPrice}</p>
                        <p className="text-purple-600 font-bold">Selling: ${item.sellingPrice}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-green-600 font-semibold">
                            Profit: ${profit.toFixed(2)}
                        </p>
                        <p className="text-xs text-gray-500">
                            ({profitPercentage}% margin)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}