import {Routes, RouterModule} from "@angular/router";
import {AddComponent} from './add/add.component';
import {ListComponent} from './list/list.component';
import {ShowAllComponent} from './showAll/show-all.component'
import {NgModule} from "@angular/core";

const productRoutes : Routes = [
  {
    path : 'add', component: AddComponent
  },
  {
    path : 'list', component: ListComponent
  },
  {
    path : 'showAll', component: ShowAllComponent
  },
  {
    path : '',
    redirectTo : '/add',
    pathMatch : 'full'
  }
];

@NgModule ({
  imports : [ RouterModule.forRoot(productRoutes) ],
  exports : [RouterModule]
})

export  class ProductRoutingModule {}
