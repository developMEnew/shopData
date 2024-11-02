import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../config/firebase';
import { ShopItem } from '../models/ShopItem';

const COLLECTION_NAME = 'shopItems';

export const shopService = {
  async addItem(item: Omit<ShopItem, 'id'>) {
    try {
      const docRef = await addDoc(collection(db, COLLECTION_NAME), item);
      return { ...item, id: docRef.id };
    } catch (error) {
      console.error('Error adding item:', error);
      throw error;
    }
  },

  async getItems(): Promise<ShopItem[]> {
    try {
      const q = query(collection(db, COLLECTION_NAME), orderBy('name'));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as ShopItem));
    } catch (error) {
      console.error('Error getting items:', error);
      throw error;
    }
  }
};