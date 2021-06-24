import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Resturant } from '../models/resturant';
import { ResturantsService } from '../services/resturants.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  resturants: Resturant[] = [];
  resturant!:Resturant;
  private _routeParamsSub!: Subscription;
  constructor(private resturantService: ResturantsService,
     private router:Router,
     private formbuilder:FormBuilder,
     private _fb: FormBuilder,
     private _route: ActivatedRoute,
     private _resturantsService: ResturantsService,
     private _router: Router) { }

  ngOnInit(): void {
    // this.resturantService.getResturants().subscribe((res: any) => {
    //   this.resturants = res.data;
    //   console.log(this.resturants)

    

    // });
    fetch(`https://blooming-atoll-60288.herokuapp.com/api/sortbyminorder`, {
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
    
    console.log('Success:', data);
    this.resturants = data;
    // console.log(this.resturants)
  
      
    
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

  getRestaurant(id:any){
    this._routeParamsSub = this._route.paramMap.subscribe(paramMap => {
      if (paramMap.has('id')) {
        this._resturantsService.getResturantById(paramMap.get('id')).subscribe((res: any) => {
          this.resturant = res.data;
          console.log(this.resturant);
        });
      }
    });
    this.router.navigate([`allresturants/${id}`]);
  }

}
