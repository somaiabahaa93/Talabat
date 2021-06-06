// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
// import { Observable, of, Subject } from 'rxjs';
// import { Router } from '@angular/router';
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   private registerUrl="http://localhost:1200/admin/register";
//   private loginUrl="http://localhost:1200/admin/login";
//   private CustomerRegisterUrl="http://localhost:1200/client/register";
//   private CustomerLoginUrl="http://localhost:1200/client/login";

//   constructor(private http:HttpClient,private router:Router) { }
//   /**
//    *
//    * @param user
//    */
//   registerUser(user: any){
//     return this.http.post(this.registerUrl,user);
//   }
//   /**
//    *
//    * @param user
//    */
//   login(user: any){
//     return this.http.post(this.loginUrl,user);
//   }
//   /**
//    *
//    * @param user
//    */
//   CustomerRegisterUser(user: any){
//     return this.http.post(this.CustomerRegisterUrl,user);
//   }
//   /**
//    *
//    * @param user
//    */
//   Customerlogin(user: any){
//     return this.http.post(this.CustomerLoginUrl,user);
//   }
//   /**
//    * remove token from local storage
//    */
//   logout(){
//     localStorage.removeItem('token');
//     this.router.navigate(['/login'])
//   }
//   /**
//    * @returns (boolen)
//    */
//   isLoggedIn(){
//     return !!localStorage.getItem('token');
//   }
//   /**
//    * get token from local stroage
//    */
//   getToken(){
//     return localStorage.getItem('token')
//   }
// }