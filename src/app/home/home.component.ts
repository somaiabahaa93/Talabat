import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../guard/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // isLogin:boolean=false;
  constructor( private http:HttpClient) { }

  ngOnInit() {
    // this.isLogin= this.authService.isLoggedIn();
  //   this.http.get('http://localhost:8000/api/user').subscribe({
  //     next:(res: any)=>{
  //         console.log(res);
  //     },
  //     error:err=>{console.log(err);}
  // });
  }
  // logout(){
    //  this.authService.logout();
    // this.isLogin=false;
  // }

}