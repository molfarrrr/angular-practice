import { Routes } from '@angular/router';
import { ProducListComponent } from './products/product-list/produc-list.component';
import { CartComponent } from './products/cart/cart.component';
import { ProductsComponent } from './products/products/products.component';

export const routes: Routes = [
    {
        path: 'products',
        component: ProductsComponent,
        children: [
            {
                path: 'list',
                component: ProducListComponent
            },
            {
                path: 'cart',
                component: CartComponent
            }
        ]
    }
];
