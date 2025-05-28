import { Routes } from '@angular/router';
import { ProducListComponent } from './products/product-list/produc-list.component';
import { CartComponent } from './products/cart/cart.component';

export const routes: Routes = [
    {
        path: 'products/list',
        component: ProducListComponent
    },
    {
        path: 'products/cart',
        component: CartComponent
    }
];
