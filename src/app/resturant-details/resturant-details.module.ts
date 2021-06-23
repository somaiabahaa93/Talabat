import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResturantDetailsRoutingModule } from './resurant-details-routing.module';
import { ResturantDetailsComponent } from './resturant-details.component';
import { MenuComponent } from './menu/menu.component';
import { MenuitemsComponent } from './menuitems/menuitems.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ MenuComponent, MenuitemsComponent],
  imports: [
    CommonModule,
   ResturantDetailsRoutingModule,
   FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class ResturantDetailsModule { }
