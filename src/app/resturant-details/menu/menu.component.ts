import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/category';
import { MenuItem } from 'src/app/models/menu-item';
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
  categories:Category[] = [];
  menuitems:MenuItem[]=[];

  
  
  constructor(private _fb: FormBuilder,
    private _route: ActivatedRoute,
    private _resturantsService: ResturantsService,  
      private _router: Router,
      private resturantService: ResturantsService) { }

  ngOnInit(): void {

    this._routeParamsSub = this._route.paramMap.subscribe(paramMap => {
      if (paramMap.has('id')) {
        this._resturantsService.getResturantById(paramMap.get('id')).subscribe((res: any) => {
          this.resturant = res.data;
          console.log(this.resturant);

        });
      }
    });

    this._routeParamsSub = this._route.paramMap.subscribe(paramMap => {
      if (paramMap.has('id')) {
        this._resturantsService.getAllCategory(paramMap.get('id')).subscribe((res: any) => {
          this.categories = res.data;
          console.log(this.categories);
          // console.log(this.categories[1].href);

        });
      }
    });


    
    // this._routeParamsSub = this._route.paramMap.subscribe(paramMap => {
    //   // if (paramMap.has('id') && paramMap.has('id')) {
    //     this._resturantsService.getMenuItems(paramMap.get('id'),paramMap.get('id')).subscribe((res: any) => {
    //       this.menuitems = res.data;
    //       console.log(this.menuitems);

    //     });
    //   // }
    // });

   

  }

  //  getItems(url:any){
  //   fetch('url', {
  //   method: "GET",
  //   headers: {"Content-type": "application/text;charset=UTF-8"}
  // })
  // .then(response => response.text()) 
  // .then(text => console.log(text)); 

  // fetch("url").then(async response => {
  //   try {
  //    const data = await response.json()
  //    console.log('response data?', data)
  //  } catch(error) {
  //    console.log('Error happened here!')
  //    console.error(error)
  //  }
  // })
  
  // }


}
