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
  message:any;



  
  
  

  constructor(private resturantService: ResturantsService,
    private authService: AuthService,
    private formbuilder: FormBuilder,
     private _route: ActivatedRoute,
     private _resturantsService: ResturantsService,   
      private _router: Router,
      private http:HttpClient,) {

   }


  ngOnInit(): void {


    this._routeParamsSub = this._route.paramMap.subscribe(paramMap => {
      if (this.user.token) {
        this._resturantsService.getResturantById(paramMap.get('id')).subscribe((res: any) => {
          this.resturant = res.data;
          console.log(this.resturant);
          
          this.form = this.formbuilder.group({

      


            name:[this.resturant.name],
            description:[this.resturant.description],
            logo:[this.resturant.logo],
            location:[this.resturant.location],
            location_longitude : [this.resturant.location_longitude],
            location_latitude: [this.resturant.location_latitude],
            working_hours:[this.resturant.working_hours],
            minimum_order:[this.resturant.minimum_order],
            delivery_fees:[this.resturant.delivery_fees],
            cusine_id:[this.resturant.cusine_id],
               
              
                });



        });
       }
    });
   
    // this.form = this.formbuilder.group({

      


    // name:[''],
    // description:[''],
    // logo:[''],
    // location:[''],
    // location_longitude : [''],
    // location_latitude: [''],
    // working_hours:[''],
    // minimum_order:[''],
    // delivery_fees:[''],
    // cusine_id:[''],
       
      
    //     });


    

        // console.log(this.form.value)



  }

  submit(id:any){
    console.log(id)
    fetch(`https://blooming-atoll-60288.herokuapp.com/api/restaurants/${id}`, {
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
              
               console.log('Success:', data.message);
              this.message=data.message;
              console.log(this.message)
            })



            .then(async data=>{
              // this._router.navigate(['crudResturant']);
              this.resturantService.getResturants().subscribe((res: any) => {
                this.resturants = res.data;
                // console.log(res.error)
            });
            })
            .catch((error) => {
              console.error('Error:', error);
            });
            console.log(this.form.value)
            //  this._router.navigate(['crudResturant']);

  }

}
