import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResturantDetailsRoutingModule } from './resurant-details-routing.module';
import { ResturantDetailsComponent } from './resturant-details.component';
import { MenuComponent } from './menu/menu.component';
import { MenuitemsComponent } from './menuitems/menuitems.component';



@NgModule({
  declarations: [ MenuComponent, MenuitemsComponent],
  imports: [
    CommonModule,
   ResturantDetailsRoutingModule 
  ]
})
export class ResturantDetailsModule { }
