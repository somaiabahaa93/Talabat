// import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from '../emitters/emitters';
// import { AuthStateService } from '../shared/auth-state.service';
// import { TokenService } from '../shared/token.service';
// import { TokenService } from './shared/token.service';
// import { AuthStateService } from './shared/auth-state.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // isSignedIn: boolean = false;
  authenticated=false;
  constructor(
    // private auth: AuthStateService,
    public router: Router,
    private http:HttpClient
    // public token: TokenService,
  ) { }

  ngOnInit() {
    // this.auth.userAuthState.subscribe(val => {
    //     this.isSignedIn = val;
    // });
    Emitters.authEmitter.subscribe({generatorOrNext:(auth:boolean)=>{this.authenticated=auth;}});
  }

  logout():void {
    this.http.post("http://localhost:8000/api/logout",{}).subscribe({
      next:(res: any)=>{
        this.authenticated=false;
          console.log(res);
          // this.router.navigate(['']);
      
      }
  });;

    // this.auth.setAuthState(false);
    // this.token.removeToken();
    // this.router.navigate(['login']);
  }

}
