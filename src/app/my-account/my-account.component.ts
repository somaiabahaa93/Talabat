import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
// user!:string;
user = this.authService.userValue;
form!: FormGroup;


  constructor( private authService: AuthService,
    private formbuilder: FormBuilder,
     private _route: ActivatedRoute,
     private router:Router,
    ) { }

  ngOnInit(): void {
    
  //  console.log (JSON.stringify(localStorage.getItem("user")))
  // this.user=JSON.stringify(localStorage.getItem("user"))
  this.form = this.formbuilder.group({

      


    first_name:[this.user.user.first_name],
     last_name:[this.user.user.last_name],
     email: [this.user.user.email],
     gender: [this.user.user.gender],
     date_of_birth: [this.user.user.date_of_birth],
     mobile_number: [this.user.user.mobile_number],
       
      
        });

  }

submit(){

  const id= this.user.user.id

  fetch(`https://blooming-atoll-60288.herokuapp.com/api/users/${id}`, {
    method: 'PUT', 
    // credentials: 'include',
    headers: {
      'Authorization': `Bearer ${this.user.token}`,
    'Content-Type': 'application/json',
    "Accept":"application/json",
    

  },
    body: JSON.stringify(this.form.value),
})
// .then(response => response.json())

.then(response => response.json())
.then(async data => {
  
   console.log('Success:', data);
   
   this.form = this.formbuilder.group({

      


    first_name:[data.data.first_name],
     last_name:[data.data.last_name],
     email: [data.data.email],
     gender: [data.data.gender],
     date_of_birth: [data.data.date_of_birth],
     mobile_number: [data.data.mobile_number],
       
      
        });
        this.router.navigate(['']);
  // this.message=data.message;
   console.log(data.data.first_name)
})




.catch((error) => {
  console.error('Error:', error);
});






}
  

}
