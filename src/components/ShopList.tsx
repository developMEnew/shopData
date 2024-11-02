import { useEffect, useState } from 'react';
import { ShopItem as ShopItemType } from '../models/ShopItem';
import { ShopItem } from './ShopItem';
import { FloatingActionButton } from './FloatingActionButton';
import { shopService } from '../services/shopService';

export function ShopList() {
    const [items, setItems] = useState<ShopItemType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        loadItems();
    }, []);

    async function loadItems() {
        try {
            const fetchedItems = await shopService.getItems();
            setItems(fetchedItems);
        } catch (err) {
            setError('Failed to load items. Please try again later.');
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[200px]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-600 p-4">
                {error}
            </div>
        );
    }

    return (
        <>
            <div className="max-w-2xl mx-auto">
                {items.length === 0 ? (
                    <div className="text-center text-gray-500 p-8">
                        No items found. Click the + button to add one.
                    </div>
                ) : (
                    items.map(item => (
                        <ShopItem key={item.id} item={item} />
                    ))
                )}
            </div>
            <FloatingActionButton />
        </>
    );
}