import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService, AlertService } from '../services';

@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrls: ['./vendor-login.component.scss']
})
export class VendorLoginComponent implements OnInit {
  form!: FormGroup;
    loading = false;
    submitted = false;
    errors:any;

    constructor(private formbuilder:FormBuilder,
      private http:HttpClient,
      private router:Router,
      private route: ActivatedRoute,
      private authService: AuthService,
      private alertService: AlertService
      // private authService:AuthService,
      // public router:Router
      ) { }

      ngOnInit(): void {
        this.form = this.formbuilder.group({

           
            email: ['', Validators.required],
            password: ['', Validators.required],
            
              });
    
      }


      get f() { return this.form.controls; }
      onsubmit():void{
       
        this.submitted = true;
    
        // reset alerts on submit
        this.alertService.clear();
    
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
    
        this.loading = true;
        this.authService.loginVendor(this.f.email.value, this.f.password.value)
            .pipe(first())
            .subscribe({
                next: (res:any) => {
                    console.log(res.user.first_name)
                    // get return url from query parameters or default to home page
                    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                    this.router.navigateByUrl(returnUrl);
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }



}
