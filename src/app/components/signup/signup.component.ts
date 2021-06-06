import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../shared/auth.service';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  errors :null;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService
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

  ngOnInit() { }

  onSubmit() {
    this.authService.register(this.registerForm.value).subscribe(
      result => {
        console.log(result.token)
      },
      error => {
        this.errors = error.error;
      },
      () => {
        this.registerForm.reset()
        this.router.navigate(['signin']);
      }
    )
  }

}
