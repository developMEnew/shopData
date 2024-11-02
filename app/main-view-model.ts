import { Observable } from '@nativescript/core';
import { shopItems } from './data/shop-items';

export class ShopViewModel extends Observable {
    private _shopItems: any[];

    constructor() {
        super();
        this._shopItems = shopItems;
    }

    get shopItems(): any[] {
        return this._shopItems;
    }
}