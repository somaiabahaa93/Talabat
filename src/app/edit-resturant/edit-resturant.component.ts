import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Resturant } from '../models/resturant';
import { AuthService } from '../services';
import { ResturantsService } from '../services/resturants.service';

@Component({
  selector: 'app-edit-resturant',
  templateUrl: './edit-resturant.component.html',
  styleUrls: ['./edit-resturant.component.scss']
})
export class EditResturantComponent implements OnInit {
  form!: FormGroup;
  resturants: Resturant[] = [];
  resturant!:Resturant
  private _routeParamsSub!: Subscription;
  user = this.authService.userValue;



  
  
  

  constructor(private resturantService: ResturantsService,
    private authService: AuthService,
    private formbuilder: FormBuilder,
     private _route: ActivatedRoute,
     private _resturantsService: ResturantsService,   
      private _router: Router,
      private http:HttpClient,) {

   }


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


    this._routeParamsSub = this._route.paramMap.subscribe(paramMap => {
      if (this.user.token) {
        this._resturantsService.getResturantById(paramMap.get('id')).subscribe((res: any) => {
          this.resturant = res.data;
          console.log(this.resturant);
        });
       }
    });

    



  }

  submit(id:any){
    console.log(id)
    fetch(`http://127.0.0.1:8000/api/restaurants/${id}`, {
                method: 'PUT', 
                // credentials: 'include',
                headers: {
                  'Authorization': `Bearer ${this.user.token}`,
                'Content-Type': 'application/json',
                "Accept":"application/json",
                
  
              },
                body: JSON.stringify(this.form.value),
            })
            .then(response => response.json())
            .then(async data => {
              
              console.log('Success:', data);
            
                
              
            })
            .catch((error) => {
              console.error('Error:', error);
            });

             this._router.navigate(['crudResturant']);

  }

}
