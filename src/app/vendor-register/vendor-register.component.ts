import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
import { AuthService } from '../services/auth.service';
// import { AuthService } from '../shared/auth.service';
// import { AuthService } from './../../shared/auth.service';


@Component({
  selector: 'app-vendor-register',
  templateUrl: './vendor-register.component.html',
  styleUrls: ['./vendor-register.component.scss']
})
export class VendorRegisterComponent implements OnInit {
  // registerForm: FormGroup 
  errors:any;
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formbuilder:FormBuilder,
    private http:HttpClient,
    private router:Router,
    private route: ActivatedRoute,

    private authService: AuthService,
    private alertService: AlertService) { }

    ngOnInit(): void {
      this.form = this.formbuilder.group({
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

  onsubmit():void{
    this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return this.errors;
        }

        this.loading = true;
        this.authService.registerVendor(this.form.value)
            .pipe(first())
            .subscribe({
                next: (res:any) => {
                       console.log(res);
                    this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                    this.router.navigate(['../vendorLogin'], { relativeTo: this.route });
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
}

}
