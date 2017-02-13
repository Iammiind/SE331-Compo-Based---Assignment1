import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AddComponent } from './product/add/add.component'
import { ProductDataService } from './services/product-data.service'
import { ShowAllComponent } from './product/showAll/show-all.component'
import { ListComponent } from './product/list/list.component'

@NgModule({
 declarations: [ AppComponent,
				AddComponent,
				ShowAllComponent,
				ListComponent],
 imports: [BrowserModule, FormsModule, HttpModule],
 bootstrap: [AppComponent],
 providers: [ProductDataService]
})
export class AppModule {}