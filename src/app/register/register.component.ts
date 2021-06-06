import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

 
  constructor(private authService:AuthService,private router:Router) { }
  invalidRegister:boolean | undefined;
  userData = {
    "first_name": "",
    "last_name": "",
    "email": "",
    "password": "",
    "phone":"",
    "role":"customer"
  };

  ngOnInit(): void {
  }
  register(userData: any){
    console.log(userData);
    this.authService.CustomerRegisterUser(userData).subscribe({
        next:(res: any)=>{
          console.log(res);
          this.router.navigate(['/login']);
        },
        error:()=>{
          this.invalidRegister=true;
        }

    })
  }
}
