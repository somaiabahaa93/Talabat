import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { first } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    form!: FormGroup;
    loading = false;
    submitted = false;
 
  constructor(private formbuilder:FormBuilder,
    private http:HttpClient,
    private router:Router,
    private route: ActivatedRoute,

    private authService: AuthService,
    private alertService: AlertService) { }
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
get f() { return this.form.controls; }

submit():void{
    // console.log(this.form.getRawValue());
    // this.http.post('http://localhost:8000/api/registercustomer',this.form.getRawValue())
    // .subscribe({
    //     next:(res: any)=>{
    //         // console.log(res);
    //         this.router.navigate(['']);
        
    //     }
    // });

    this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        this.authService.register(this.form.value)
            .pipe(first())
            .subscribe({
                next: (res:any) => {
                       console.log(res);
                    this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
}

}







