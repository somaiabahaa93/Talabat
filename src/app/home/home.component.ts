import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../guard/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLogin:boolean=false;
  constructor() { }

  ngOnInit() {
    // this.isLogin= this.authService.isLoggedIn();
  }
  logout(){
    // this.authService.logout();
    this.isLogin=false;
  }

}