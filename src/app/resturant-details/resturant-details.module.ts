import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResturantDetailsRoutingModule } from './resurant-details-routing.module';
import { ResturantDetailsComponent } from './resturant-details.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [ MenuComponent],
  imports: [
    CommonModule,
   ResturantDetailsRoutingModule 
  ]
})
export class ResturantDetailsModule { }
