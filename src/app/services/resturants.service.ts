import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { observable, Observable } from 'rxjs';
import { Category } from '../models/category';
// import { this.catstart } from '../resturant-details/menu/menu.component/menu.component.ts';


@Injectable({
  providedIn: 'root'
})
export class ResturantsService {
  // }
  
  url:any;
  start:any=localStorage.getItem('start');
  // end:any=localStorage.getItem('end');
   i:number=this.start ;


  // start:any=localStorage.getItem('start');
  end:any;
  //  i:number=this.start;

  categories:Category[] = [];
  arr:any[]=[] ;
  
  static getAllCategory(id1: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private _http: HttpClient) { }
  getResturants(params?: any) {
    return this._http.get(`${environment.baseUrl}`, { params });
  }
  getResturantById(id: any) {
    return this._http.get(`${environment.baseUrl}/${id}`);
  }

  getAllCategory(id: any) {
    return this._http.get(`${environment.baseUrl}/${id}/menucategories`);
  }

  getRating(id: any) {
    return this._http.get(`${environment.baseUrl}/${id}/ratings`);
  }
  createResturant(params?:any){
    return this._http.post(`${environment.baseUrl}`, { params });
  }

  // addToCart(id: any,id1:any){
  //      return this._http.get(`${environment.baseUrl}/${id}/menuitems/${id1}/cartitems`)
  
  //    }
  // getMenuItems(id: any,id1:any){
  //   return this._http.get(`${environment.baseUrl}/${id}/menucategories/${id2}/menuitems`)

  // }







  

   getMenuItems(id: any){
    // localStorage.removeItem("start");
    // localStorage.removeItem("end");
    // this.start=localStorage.getItem('start');
    this.end=localStorage.getItem('end');
    // this.i=this.start
  //  this.i=this.start;
    while(this.i<=this.end){

     
      this.url=this._http.get(`${environment.baseUrl}/${id}/menucategories/${this.i}/menuitems`);
      this.i++;
      
      return this.url;
      
      // if(this.url=this._http.get(`${environment.baseUrl}/${id}/menucategories/${this.i}/menuitems`))
      // {
      // console.log(this.i)
      //   return this.url;
        
      // }
      // else
      // {
      //   return [];
      // }
      
      // if(this.url){
      //   console.log(this.url)
        // return this.url;
      // }
      
      
    }
     
    localStorage.clear();
    // localStorage.removeItem("start");
    // localStorage.removeItem("end");

    
  }



}
