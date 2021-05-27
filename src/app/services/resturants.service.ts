import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResturantsService {

  constructor(private _http: HttpClient) { }
  getResturants(params?: any) {
    return this._http.get(`${environment.baseUrl}`, { params });
  }
}
