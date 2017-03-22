import { Component } from "@angular/core";
import { ProductDataService } from '../services/product-data.service'
import { Router } from "@angular/router";

@Component ({
  selector : 'menu',
  templateUrl : 'app/menu/menu.component.html',
  styleUrls : ['app/menu/menu.component.css']
})

export class MenuComponent {
  // constructor(private productsDataService : ProductDataService, private router : Router) {}
}
