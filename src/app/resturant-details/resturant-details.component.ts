import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Resturant } from '../models/resturant';
import { ResturantsService } from '../services/resturants.service';

@Component({
  selector: 'app-resturant-details',
  templateUrl: './resturant-details.component.html',
  styleUrls: ['./resturant-details.component.scss']
})
export class ResturantDetailsComponent implements OnInit {
 
  private _routeParamsSub!: Subscription;
  resturant!: Resturant;
  //  allproducts: any;


  constructor( private _fb: FormBuilder,private _route: ActivatedRoute,private _resturantsService: ResturantsService,    private _router: Router
    ) { }

  ngOnInit(): void {
    this._routeParamsSub = this._route.paramMap.subscribe(paramMap => {
      if (paramMap.has('id')) {
        this._resturantsService.getResturantById(paramMap.get('id')).subscribe((res: any) => {
          this.resturant = res.data;
          console.log(this.resturant);
        });
      }
    });
  }
  ngOnDestroy(): void {
    this._routeParamsSub.unsubscribe();
  }

}
