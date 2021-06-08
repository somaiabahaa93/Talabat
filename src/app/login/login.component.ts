import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form!: FormGroup;
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router
    // private authService:AuthService,
    // public router:Router
    ) { }

//   invalidLogin:boolean | undefined;
//   userData={
//     "email":"",
//     "password": ""
//   }
  ngOnInit(): void {
    this.form = this.formbuilder.group({

        // first_name: '',
        // last_name: '',
        // email: '',
        // password: '',
        // confirm-password:'',
        // gender:'',
        // date-of-birth:'',
        // mobile-number:'',
       
        email: ['', Validators.required],
        password: ['', Validators.required],
        


        
         
        
          });

  }
//   token: string | undefined;
//   signIn(userData: any){
//     console.log(userData);
    // this.authService.Customerlogin(userData).subscribe(
    //   {
    //     next:(res: { [x: string]: any; })=>{
    //       console.log(res);
    //       this.token = res['token'];
    //       // localStorage.setItem('token',this.token)
    //       this.router.navigate(['/']);
    //     },
    //     error:()=>{
    //       this.invalidLogin=true;
    //     }
    //   }
    // )
//   }

submit():void{
    this.http.post('http://localhost:8000/api/logincustomer',this.form.getRawValue()).
    subscribe({
        next:(res: any)=>{
            console.log(res);
            this.router.navigate(['']);
        
        }
    });

}
}