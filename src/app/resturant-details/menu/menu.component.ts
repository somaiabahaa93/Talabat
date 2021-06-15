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
  styleUrls: ['./menu.component.scss'],
  // providers: [
  //   {provide: 'catstart', useValue: 'catstart'},
  //   {provide: 'catend', useValue: 'catend'},

  // ]

})

export class MenuComponent implements OnInit {
  private _routeParamsSub!: Subscription;
  resturant!: Resturant;
  categories:Category[] = [];
  menuitems:MenuItem[]=[];
  catstart!:any;
  catend!:any;
  
  // public resdata:[]=[];
  // public i:number=0;
  
  constructor(private _fb: FormBuilder,
    private _route: ActivatedRoute,
    private _resturantsService: ResturantsService,  
      private _router: Router,
      private resturantService: ResturantsService,
      ) {
          

       }

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
        
        this._resturantsService.getAllCategory(paramMap.get('id')).subscribe(async(res: any) => {
        
          let cats = res.data;
          // this.catstart=this.categories[0].id;
          // this.catend=this.categories[this.categories.length-1].id;
          // console.log(this.catstart);
          // console.log(this.catend);
          // localStorage.setItem('start',this.catstart);
          // localStorage.setItem('end',this.catend);
          for(let cat of cats){
            let res =await fetch(cat.href.menuitems, {
              method: 'GET', 
              headers: {
              'Content-Type': 'application/json',
              "Accept":"application/json"
            }
          })
          let resobj=await res.json();
          cat.menuitems=resobj.data;
          }
          this.categories=cats;
        });
      }
    });

    // localStorage.removeItem("start");
    // localStorage.removeItem("end");
    
    // this._routeParamsSub = this._route.paramMap.subscribe(paramMap => {
    //   // if (paramMap.has('id') && paramMap.has('id')) {
    //     this._resturantsService.getMenuItems(paramMap.get('id'),paramMap.get('id')).subscribe((res: any) => {
    //       this.menuitems = res.data;
    //       console.log(this.menuitems);

    //     });
    //   // }
    // });

   
 









  }


    


  getItems(cat:any){

console.log(cat)
              fetch(cat.href.menuitems, {
              method: 'GET', 
              headers: {
              'Content-Type': 'application/json',
              "Accept":"application/json"
            }
          })
          .then(response => response.json())
          .then(data => {
            
            console.log('Success:', data);
            cat.menuitems=data.data;
            // displaydata(data);
            
            // this.resdata=data;
            // console.log( data.data.length);
            
          })
          .catch((error) => {
            console.error('Error:', error);
          });

          // console.log(this.i);
          // this.i=0;
          // while(this.i<this.length){}
          // console.log(this.resdata);

       }


       


















    // getItems(url:any){


    //           fetch(url, {
    //           method: 'GET', 
    //           headers: {
    //           'Content-Type': 'application/json',
    //           "Accept":"application/json"
    //         }
    //       })
    //       .then(response => response.json())
    //       .then(data => {
    //         while(this.i<data.data.length){
    //         console.log('Success:', data.data[this.i].name);
    //         this.i++;
    //         // this.resdata=data;
    //         // console.log( data.data.length);
    //         }
    //       })
    //       .catch((error) => {
    //         console.error('Error:', error);
    //       });

    //       console.log(this.i);
    //       this.i=0;
    //       // while(this.i<this.length){}
    //       console.log(this.resdata);

    //    }






  //  

 }




//  function displaydata(data: any) {
//    let i=0;
//   //  var resdata:any[]=[];
//   while(i<data.data.length){
//     // console.log(data.data[i].name);
//     // resdata=data.data[i].name;
//     this.resdata.push(data.data[i].name);
//     console.log(this.resdata)
//     i++;
    
//   }


  // const itemsDiv = document.getElementById("itemsDiv");
  
  
// }

