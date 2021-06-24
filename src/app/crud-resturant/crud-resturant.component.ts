import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { Resturant } from '../models/resturant';
import { AuthService } from '../services';
import { CrudResturantService } from '../services/crud-resturant.service';
import { ResturantsService } from '../services/resturants.service';

@Component({
  selector: 'app-crud-resturant',
  templateUrl: './crud-resturant.component.html',
  styleUrls: ['./crud-resturant.component.scss']
})
export class CrudResturantComponent implements OnInit {
  resturants: Resturant[] = [];
  resturant!:Resturant
  message:any;
  private _routeParamsSub!: Subscription;
  user = this.authService.userValue;
  constructor(private resturantService: ResturantsService,
    private authService: AuthService,
    private _fb: FormBuilder,
     private _route: ActivatedRoute,
     private _resturantsService: ResturantsService,   
      private _router: Router) {

   }

  ngOnInit(): void {
    this.resturantService.getResturants().subscribe((res: any) => {
      this.resturants = res.data;
      // console.log(this.resturants)
  });
  
}

delete(id:any){
  // console.log(id);
  fetch(`https://blooming-atoll-60288.herokuapp.com/api/restaurants/${id}`, {
                method: 'DELETE', 
                // credentials: 'include',
                headers: {
                  'Authorization': `Bearer ${this.user.token}`,
                'Content-Type': 'application/json',
                "Accept":"application/json",
                
  
              }
            })
            .then(response => response.json())
            .then( data => {
              
              // console.log('Success:', data.message);
              this.message=data.message;
              if(this.message ==='Unauthenticated.')
              {
                this.message ='You are not logged in yet'
              }
              console.log(this.message)
            })
                
              .then(async data=>{
                this.resturantService.getResturants().subscribe((res: any) => {
                  this.resturants = res.data;
                   console.log(res)
              });
              })
           
            .catch((error) => {
               console.error('Error here is:', error);
            });
  

}

// edit(id:any){
//   this._routeParamsSub = this._route.paramMap.subscribe(paramMap => {
//     if (this.user.token) {
//       this._resturantsService.getResturantById(paramMap.get('id')).subscribe((res: any) => {
//         this.resturant = res.data;
//         console.log(this.resturant);
//       });
//      }
//   });

// }

}
