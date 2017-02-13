import { Component } from '@angular/core';
import { ProductDataService } from '../../services/product-data.service'
import { Product } from '../product'

@Component({
    selector: 'list',
    templateUrl: 'app/product/list/list.component.html',
    styleUrls : ['app/product/list/list.component.css']
})
export class ListComponent {
    constructor(private productService : ProductDataService){}

    products : Product[] = this.productService.getProductsData()
    
    getDescription(productDescription) {
        if ( productDescription.length <= 50 ) {
            return productDescription
        }
        else {
            // shown only 47 character and followed with ...
            return productDescription.substring(0,47) + '...'
        }
    }

    showDetail(product) {

        // alert(`
        //     ei ${product.name} ei `)
        alert( " \n ID : " + product.id
              + " \n Name : " + product.name + " \n Description : " + product.description
              + " \n Picture : " + product.picture + " \n Price : " + product.price
              + " \n Amount : " + product.amount + " \n Rating : " + product.rating )
    }
}