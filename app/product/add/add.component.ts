import { Component } from '@angular/core'
import { ProductDataService } from '../../services/product-data.service'
import { Product } from '../product'

@Component ({
    selector : 'add',
    templateUrl : 'app/product/add/add.component.html'
    // styleUrls : []
})

export class AddComponent {

    // Inject service
    constructor(private productService : ProductDataService){}

    // create new object => OOP
    newProduct : Product = new Product()

    addProduct() {
        this.productService.addProduct(this.newProduct)
        // alert
         this.showDetail(this.newProduct)
         console.log(this.newProduct)
    }

    addPicture(picture) {
        this.newProduct.picture = picture
    }

    reset(dom) {
        this.newProduct = new Product()
        console.log(this.newProduct)
        console.log(dom.value)
        dom.value = ""
    }

    showDetail(product) {
        alert( " ID : " + product.id 
              + " \n Name : " + product.name + " \n Description : " + product.description
              + " \n Picture : " + product.picture + " \n Price : " + product.price
              + " \n Amount : " + product.amount + " \n Rating : " + product.rating )
    }

}