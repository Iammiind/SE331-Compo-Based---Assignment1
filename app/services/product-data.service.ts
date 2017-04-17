import { Injectable } from '@angular/core'
import { Product } from '../product/product'
import { PRODUCTS } from '../product/mocks' 

@Injectable()
export class ProductDataService {
    products : Product[] = PRODUCTS

    addProduct(product: Product, imageFile: any) {
        return null;
        // this.products.push(newProduct)
    }

    getProductsData() {
        return this.products
    }

    getProduct(productID: number) {
        return this.products[productID];
  }
}