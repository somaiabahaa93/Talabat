import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResturantsService {
  // }
  
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

  getMenuItems(id: any,id1:any) {
    return this._http.get(`${environment.baseUrl}/${id}/menucategories/${id1}/menuitems`);
  }


}
