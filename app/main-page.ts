import { EventData, Page } from '@nativescript/core';
import { ShopViewModel } from './main-view-model';

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new ShopViewModel();
}