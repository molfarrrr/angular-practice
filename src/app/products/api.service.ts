import { Injectable, ResourceRef, resource } from '@angular/core';
import { Product } from './products.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly productsUrl = 'https://dummyjson.com/c/e01a-4468-43e6-bc22';

  productsListResource: ResourceRef<Product[]> = resource({
    loader: async () => {
      try {
        const response = await fetch(this.productsUrl);
        if (!response.ok) {
          console.error('Response Status: ', response.status);
          return null;
        }
    
        const json = await response.json();
        return json;
      } catch (error) {
        console.error('Error: ', error);
        return null;
      }
    }
  });
}
