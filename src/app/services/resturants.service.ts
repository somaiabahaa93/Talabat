import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { observable, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResturantsService {
  // }
  url:any;
  i:number =1;
  
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

  getMenuItems(id: any){
   
    while(this.i <=6){

     
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
    
  }



}
