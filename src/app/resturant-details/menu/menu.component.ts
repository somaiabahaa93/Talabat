import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Resturant } from 'src/app/models/resturant';
import { ResturantsService } from 'src/app/services/resturants.service';
// import { Resturant } from '../models/resturant';
// import { ResturantsService } from '../services/resturants.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  private _routeParamsSub!: Subscription;
  resturant!: Resturant;
  constructor(private _fb: FormBuilder,private _route: ActivatedRoute,private _resturantsService: ResturantsService,    private _router: Router) { }

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

}
