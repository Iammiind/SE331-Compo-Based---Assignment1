import { Component } from '@angular/core'
import { ProductDataService } from '../../services/product-data.service'
import { Product } from '../product'

@Component ({
    selector : 'showAll',
    templateUrl : 'app/product/showAll/show-all.component.html'
    //styleUrls : []
})

export class ShowAllComponent {
    constructor(private productService : ProductDataService){}

    products : Product[] = this.productService.getProductsData()

}