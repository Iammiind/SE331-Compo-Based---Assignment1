import { Router } from '@angular/router';
import { ShowAllComponent } from './../showAll/show-all.component';
import { Component } from '@angular/core';
import { ProductDataServerService } from '../../services/product-data-server.service';
import { Product } from '../product'

@Component({
    selector: 'list',
    templateUrl: 'app/product/list/list.component.html',
    styleUrls : ['app/product/list/list.component.css']
})
export class ListComponent {
    constructor(private productDataServerService : ProductDataServerService, private router: Router){}
    products : Product;

    ngOnInit() {
        this.productDataServerService.getProductsData()
        .subscribe(resultProduct => {
            this.products = resultProduct;
              console.log(this.products);
        })
    }
    
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
        // alert( " \n ID : " + product.id
        //       + " \n Name : " + product.name + " \n Description : " + product.description
        //       + " \n Picture : " + product.picture + " \n Price : " + product.price
        //       + " \n Amount : " + product.amount + " \n Rating : " + product.rating )
        this.router.navigate(['showAll/' + product.id]);

    }
}