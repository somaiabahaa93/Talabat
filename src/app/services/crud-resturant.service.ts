import { Injectable } from '@angular/core';
// import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { environment } from '@environments/environment';
import { Resturant } from '../models/resturant';
import { environment } from 'src/environments/environment';
// import { User } from '@app/_models';
// const baseUrl = `${environment.baseUrl};
@Injectable({
  providedIn: 'root'
})
export class CrudResturantService {

  constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get(`${environment.baseUrl}`,);
    }

    getById(id: any) {
        return this.http.get(`${environment.baseUrl}/${id}`);
    }

    create(params: any) {
        return this.http.post(`${environment.baseUrl}`, params);
    }

    update(id: any, params: any) {
        return this.http.put(`${environment.baseUrl}/${id}`, params);
    }

    delete(id: any) {
        return this.http.delete(`${environment.baseUrl}/${id}`);
    }
}
