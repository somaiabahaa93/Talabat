import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
// import { AuthService } from '../shared/auth.service';
// import { AuthService } from './../../shared/auth.service';


@Component({
  selector: 'app-vendor-register',
  templateUrl: './vendor-register.component.html',
  styleUrls: ['./vendor-register.component.scss']
})
export class VendorRegisterComponent implements OnInit {
  registerForm: FormGroup;
  errors=null;
  constructor(
    public router: Router,
    public fb: FormBuilder,
    // public authService: AuthService
  ) { 
    this.registerForm = this.fb.group({
      first_name: [''],
      last_name: [''],
      email: [''],
      password: [''],
      confirm_password: [''],
      gender: [''],
      date_of_birth:[''],
      mobile_number:[]
     
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // this.authService.register(this.registerForm.value).subscribe(
    //   result => {
    //     console.log(result)
    //   },
    //   error => {
    //     this.errors = error.error;
    //   },
    //   () => {
    //     this.registerForm.reset()
    //     this.router.navigate(['signin']);
    //   }
    // )
  }

}
