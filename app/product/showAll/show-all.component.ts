import { Product } from './../product';
import { Component } from '@angular/core'
import { ProductDataServerService } from '../../services/product-data-server.service';
import { ActivatedRoute, Params } from '@angular/router'
import 'rxjs/add/operator/switchMap'

@Component ({
    selector : 'showAll',
    templateUrl : 'app/product/showAll/show-all.component.html',
    styleUrls : ['app/product/showAll/show-all.component.css']
})

export class ShowAllComponent {
    constructor(private productDataServerService : ProductDataServerService, private route : ActivatedRoute){}
    product : Product;

    ngOnInit() {
        this.route.params.switchMap((params: Params) => this.productDataServerService.getProduct(+params['id'])).subscribe((product: Product) => {
            if(product) {
                this.product = product;
                console.log(this.product);
            }
        });
    }
}