import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BrowserStack } from 'protractor/built/driverProviders';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/category';
import { MenuItem } from 'src/app/models/menu-item';
import { Rating } from 'src/app/models/rating';
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
  rate:Rating[]=[];
  catstart!:any;
  catend!:any;
  ratingComment!:string;
  imoge!:string;
  
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
        
        switch ( this.resturant.ratings ) {
          case 1:
          case 2:
             this.ratingComment="Good";
             this.imoge=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
             <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
             <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
           </svg>`
              break;
          case 3:
          case 4:
            this.ratingComment="Very Good"
              break;
          case 5:
            this.ratingComment="Excellent"
              break;
          
       }

        });
      }
    });

    // this._routeParamsSub = this._route.paramMap.subscribe(paramMap => {
    //   if (paramMap.has('id')) {
    //     this._resturantsService.getRating(paramMap.get('id')).subscribe((res: any) => {
    //       this.rate = res.data;
    //       console.log(this.rate[0].delivery_time_score);

    //     });
    //   }
    // });
    
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

