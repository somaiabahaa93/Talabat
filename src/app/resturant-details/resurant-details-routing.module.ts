import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MenuitemsComponent } from './menuitems/menuitems.component';
import { ResturantDetailsComponent } from './resturant-details.component';

// import { CustomersComponent } from './customers.component';


const routes: Routes = [
  {
    path: '',
    component: ResturantDetailsComponent
  },
  {
  path: 'menu',
  component: MenuComponent
},
{
  path: 'menu/:id',
  component: MenuitemsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResturantDetailsRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/