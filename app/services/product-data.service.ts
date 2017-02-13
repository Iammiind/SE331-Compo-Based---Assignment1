import { Injectable } from '@angular/core'
import { Product } from '../product/product'
import { PRODUCTS } from '../product/mocks' 

@Injectable()
export class ProductDataService {
    products : Product[] = PRODUCTS

    addProduct(newProduct) {
        this.products.push(newProduct)
    }

    getProductsData() {
        return this.products
    }
}