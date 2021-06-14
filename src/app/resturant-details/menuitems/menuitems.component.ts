import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/category';
import { MenuItem } from 'src/app/models/menu-item';
import { ResturantsService } from 'src/app/services/resturants.service';

@Component({
  selector: 'app-menuitems',
  templateUrl: './menuitems.component.html',
  styleUrls: ['./menuitems.component.scss']
})
export class MenuitemsComponent implements OnInit {
  private _routeParamsSub!: Subscription;
  menuitems:MenuItem[] = [];
  categories:Category[] = [];
  arr:any[]=[] ;
  constructor(private _fb: FormBuilder,
    private _route: ActivatedRoute,
    private _resturantsService: ResturantsService,  
      private _router: Router,
      private resturantService: ResturantsService) { }
  ngOnInit(): void {
     
    // this._routeParamsSub = this._route.paramMap.subscribe(paramMap => {
    //   if (paramMap.has('id')) {
    //     this._resturantsService.getAllCategory(paramMap.get('id')).subscribe((res: any) => {
    //       this.categories = res.data;
    //       for(let i=0;i<this.categories.length;i++){

    //         this.arr.push(this.categories[i].id)
    //         // console.log(this.categories[i].href);
    //         }
        
    //       // console.log(this.arr);
          
           

    //     });
    //   }
    // });  
    

    // for(let i=0;i<this.arr.length;i++){
      
      // this._routeParamsSub = this._route.paramMap.subscribe(paramMap => {
      //   debugger
      //   for(let i=0;i<this.arr.length;i++){
          
      //     // if (paramMap.has('id') && paramMap.has('id')) {
      //       this._resturantsService.getMenuItems(paramMap.get('id'),paramMap.get('id')).subscribe((res: any) => {
      //         this.menuitems = res.data;
      //         console.log(this.menuitems);
      //         // for(let i=0;i<this.menuitems.length;i++){
    
    
      //           // console.log(this.menuitems[i].menu_category_id)
      //         //  }
        
    
      //       });
      //     }
      //   });

    // }


    // for(let i=1;i<this.categories.length;i++){

      this._routeParamsSub = this._route.paramMap.subscribe(paramMap => {
          //  if (paramMap.has('id') ) {
            // for(let i=0;i<this.categories.length;i++){
            this._resturantsService.getMenuItems(paramMap.get('id')).subscribe((res: any) => {
              this.menuitems = res.data;
              console.log(this.menuitems);
              // for(let i=0;i<this.menuitems.length;i++){
    
    
              //   // console.log(this.menuitems[i].menu_category_id)
              //  }
        
    
            });
          //  }
      // } //for
    });
    
  // } //for









    ///////الكود الى بيرجع داتا 
    
    // this._routeParamsSub = this._route.paramMap.subscribe(paramMap => {
    //   // if (paramMap.has('id') && paramMap.has('id')) {
    //     this._resturantsService.getMenuItems(paramMap.get('id'),paramMap.get('id')).subscribe((res: any) => {
    //       this.menuitems = res.data;
    //       // console.log(this.menuitems);
    //       // for(let i=0;i<this.menuitems.length;i++){


    //       //   // console.log(this.menuitems[i].menu_category_id)
    //       //  }
    

    //     });
    //   // }
    // });



    // this._routeParamsSub = this._route.paramMap.subscribe(paramMap => {
    //     if (paramMap.has('id') && paramMap.has('id1')   ) {
    //       this._resturantsService.getMenuItems(paramMap.get('id'),paramMap.get('id1')).subscribe((res: any) => {
    //         this.menuitems = res.data;
    //         console.log(this.menuitems);
  
    //       });
    //     }
    //   });

    

  }

}
