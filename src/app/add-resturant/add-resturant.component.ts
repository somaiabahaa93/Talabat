import { Component, OnInit } from '@angular/core';
import { ResturantsService } from '../services/resturants.service';
import { Resturant } from '../models/resturant';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertService, AuthService } from '../services';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Cuisine } from '../models/cuisine';

@Component({
  selector: 'app-add-resturant',
  templateUrl: './add-resturant.component.html',
  styleUrls: ['./add-resturant.component.scss']
})
export class AddResturantComponent implements OnInit {
  resturant!:Resturant;
  resturants:Resturant[]=[];
  cuisines:Cuisine[] = [];

  form!: FormGroup;
  user = this.authService.userValue;
  constructor(private resturantService: ResturantsService,private authService: AuthService
    ,private formbuilder:FormBuilder,
    private http:HttpClient,
    private router:Router,
    private route: ActivatedRoute,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
    name:[''],
    description:[''],
    logo:[''],
    location:[''],
    location_longitude : [''],
    location_latitude: [''],
    working_hours:[''],
    minimum_order:[''],
    delivery_fees:[''],
    cusine_id:[''],
     });


     fetch(`https://blooming-atoll-60288.herokuapp.com/api/cuisines`, {
      method: 'GET', 
      // credentials: 'include',
      headers: {
        // 'Authorization': `Bearer ${this.user.token}`,
      'Content-Type': 'application/json',
      "Accept":"application/json",
      

    }
  })
  .then(response => response.json())
  .then(async data => {
    
    // console.log('Success:', data);
    this.cuisines = data;
    //  console.log(this.cuisines)
  
      
    
   })
  // .then(async data=>{
  //   this.router.navigate(['crudResturant']);
  //   this.resturantService.getResturants().subscribe((res: any) => {
  //     this.resturants = res.data;
  //     // console.log(res.error)
  // });
  // })
  .catch((error) => {
    console.error('Error:', error);
  });

  }
  submit(){
  //   this.resturantService.createResturant().subscribe((res: any) => {
  //     this.resturant= res.data;
  //     console.log(this.resturant)
  // });

  
                fetch(`https://blooming-atoll-60288.herokuapp.com/api/restaurants`, {
                method: 'POST', 
                // credentials: 'include',
                headers: {
                  'Authorization': `Bearer ${this.user.token}`,
                'Content-Type': 'application/json',
                "Accept":"application/json",
                
  
              },
                body: JSON.stringify(this.form.value),
            })
            // .then(response => response.json())
            // .then(async data => {
              
            //   console.log('Success:', data);
            
                
              
            // })
            .then(async data=>{
              this.router.navigate(['crudResturant']);
              this.resturantService.getResturants().subscribe((res: any) => {
                this.resturants = res.data;
                // console.log(res.error)
            });
            })
            .catch((error) => {
              console.error('Error:', error);
            });
  
            

           






  }


}
