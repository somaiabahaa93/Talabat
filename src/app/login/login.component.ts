import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService:AuthService,
    public router:Router
    ) { }

  invalidLogin:boolean | undefined;
  userData={
    "email":"",
    "password": ""
  }
  ngOnInit(): void {
  }
  token: string | undefined;
  signIn(userData: any){
    console.log(userData);
    this.authService.Customerlogin(userData).subscribe(
      {
        next:(res: { [x: string]: any; })=>{
          console.log(res);
          this.token = res['token'];
          // localStorage.setItem('token',this.token)
          this.router.navigate(['/']);
        },
        error:()=>{
          this.invalidLogin=true;
        }
      }
    )
  }
}