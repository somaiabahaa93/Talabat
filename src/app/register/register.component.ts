import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
// import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    form!: FormGroup;
 
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router) { }
//   invalidRegister:boolean | undefined;
//   userData = {
//     "first_name": "",
//     "last_name": "",
//     "email": "",
//     "password": "",
//     "phone":"",
//     "role":"customer"
//   };

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
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        confirm_password: ['', Validators.required],
        gender: ['', Validators.required],
        date_of_birth: ['', Validators.required],
        mobile_number: ['', Validators.required],


        
         
        
          });
  }
//   register(userData: any){
//     console.log(userData);
//     this.authService.CustomerRegisterUser(userData).subscribe({
//         next:(res: any)=>{
//           console.log(res);
//           this.router.navigate(['/login']);
//         },
//         error:()=>{
//           this.invalidRegister=true;
//         }

//     })
//   }
submit():void{
    // console.log(this.form.getRawValue());
    this.http.post('http://localhost:8000/api/registercustomer',this.form.getRawValue())
    .subscribe({
        next:(res: any)=>{
            // console.log(res);
            this.router.navigate(['']);
        
        }
    });

}

}







