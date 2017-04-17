import { Product } from './../product';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { ProductDataServerService } from '../../services/product-data-server.service';

@Component ({
    selector : 'add',
    templateUrl : 'app/product/add/add.component.html',
    styleUrls : ['app/product/add/add.component.css']
})

export class AddComponent {

    // Inject service
    constructor(private productDataServerService : ProductDataServerService, private router: Router){}

    // create new object => OOP
    newProduct : Product = new Product();

    @ViewChild('fileInput') inputPictureElement: ElementRef;

    addProduct(product: Product) {
        let result: Product;
        console.log(product);
        let inputPictureElement: HTMLInputElement = this.inputPictureElement.nativeElement;

        this.productDataServerService.addProduct(product, inputPictureElement.files.item(0))
            .subscribe(resultProduct => {
                result = resultProduct
                if(result != null) {
                    this.router.navigate(['/list']);
                }else{
                    alert("Error in adding the student");
                }
            })
        // this.productService.addProduct(this.newProduct)
        // // alert
        //  this.showDetail(this.newProduct)
        //  console.log(this.newProduct)
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