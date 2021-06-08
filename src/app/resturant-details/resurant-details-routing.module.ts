import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
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