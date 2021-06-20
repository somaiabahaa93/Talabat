import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from '../models/user';
import { AlertService } from '../services/alert.service';
import { AuthService } from '../services/auth.service';
// import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form!: FormGroup;
    loading = false;
    submitted = false;
    // errors:any;
    errors = '';
    // user!: User;

  constructor(private formbuilder:FormBuilder,
    private http:HttpClient,
    private router:Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private alertService: AlertService
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
//   token!: string;
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
get f() { return this.form.controls; }

submit():void{
    // this.http.post('http://localhost:8000/api/logincustomer',this.form.getRawValue(),).
    // subscribe({
    //     next:(res: any)=>{
    //         console.log(res);
    //     //     this.token = res['token'];
    //     //   localStorage.setItem('token',this.token)
    //         this.router.navigate(['']);
        
    //     }
    // });
    // this.submitted = true;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    // this.loading = true;
    this.authService.login(this.f.email.value, this.f.password.value)
        .pipe(first())
        .subscribe({
            next: () => {
                // console.log(res.user.first_name)
                // get return url from query parameters or default to home page
                // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                // this.router.navigateByUrl(returnUrl);
                this.router.navigate(['']);
            },
            error: error => {
                // this.alertService.error(error);
                // this.loading = false;
                this.errors = error;
            }
        });
}
}

