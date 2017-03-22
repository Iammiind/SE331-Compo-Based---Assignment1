import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AddComponent } from './product/add/add.component'
import { ProductDataService } from './services/product-data.service'
import { ShowAllComponent } from './product/showAll/show-all.component'
import { ListComponent } from './product/list/list.component'
import { ProductRoutingModule } from './product/product-routing.module'
import { MenuComponent } from "./menu/menu.component";
import { HashLocationStrategy, LocationStrategy } from '@angular/common'

@NgModule({
 declarations: [ AppComponent,
				AddComponent,
				ShowAllComponent,
				ListComponent,
        MenuComponent],
 imports: [BrowserModule, FormsModule, HttpModule, ProductRoutingModule],
 bootstrap: [AppComponent],
 providers: [ProductDataService,
              { provide : LocationStrategy, useClass : HashLocationStrategy }]
})
export class AppModule {}
