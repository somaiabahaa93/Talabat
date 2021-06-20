// import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from '../emitters/emitters';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
// import { AuthStateService } from '../shared/auth-state.service';
// import { TokenService } from '../shared/token.service';
// import { TokenService } from './shared/token.service';
// import { AuthStateService } from './shared/auth-state.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {
  
  // isSignedIn: boolean = false;
  // authenticated=false;
  // token!: string;

  // constructor(
  //   // private auth: AuthStateService,
  //   public router: Router,
  //   private http:HttpClient
  //   // public token: TokenService,
  // ) { }

  
    // this.auth.userAuthState.subscribe(val => {
    //     this.isSignedIn = val;
    // });
    // Emitters.authEmitter.subscribe({generatorOrNext:(auth:boolean)=>{this.authenticated=auth;}});
  

  // logout():void {
  //   localStorage.getItem('token');
  //   this.http.post("http://localhost:8000/api/logout",this.token).subscribe({
  //     next:(res: any)=>{
  //       // this.authenticated=false;
  //       // this.token = res['token'];
        
  //         console.log(res);
  //         // this.router.navigate(['']);
      
  //     }
  // });;

  //   // this.auth.setAuthState(false);
  //   // this.token.removeToken();
  //   // this.router.navigate(['login']);
  // }


  user!:User
  currentUser:any
  //  isLoggedIn = this.user && this.user.token;


    constructor(private authService: AuthService) {
      
        this.authService.user.subscribe(user => this.user = user);
        // this.authService.logout();
        // localStorage.removeItem('user');
        // this.user=localStorage.getItem('user');
        
         this.currentUser=localStorage.getItem('user');
    }
   
    logout() {

      // this.currentUser=localStorage.getItem('user');
        this.authService.logout();
    }

}
