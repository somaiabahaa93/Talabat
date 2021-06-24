import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cuisine } from '../models/cuisine';
import { Resturant } from '../models/resturant';
import { ResturantsService } from '../services/resturants.service';

@Component({
  selector: 'app-lets-go',
  templateUrl: './lets-go.component.html',
  styleUrls: ['./lets-go.component.scss']
})

export class LetsGoComponent implements OnInit {
  // @Input()data: any;
  form!: FormGroup;


   resturants: Resturant[] = [];
   resturant!:Resturant;
   cuisines:Cuisine[] = [];

   search!:any;
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
    // console.log(this.data)
    const lat=localStorage.getItem("lat");
    const lon=localStorage.getItem("lon");



    fetch(`https://blooming-atoll-60288.herokuapp.com/api/restaurants/nearby/${lat}/${lon}`, {
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

  

    fetch(`https://blooming-atoll-60288.herokuapp.com/api/cuisines`, {
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
    
    // console.log('Success:', data);
    this.cuisines = data;
    //  console.log(this.cuisines)
  
      
    
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

    
  



    // });
  }

  Name()
  {
    fetch(`https://blooming-atoll-60288.herokuapp.com/api/sortbyname`, {
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

  MinOrderAmount()
  {
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

  Newest()
  {
    fetch(`https://blooming-atoll-60288.herokuapp.com/api/sortbydate`, {
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

  Rate()
  {
    fetch(`https://blooming-atoll-60288.herokuapp.com/api/sortbyrating`, {
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


  getAllCusines()
  {
    fetch(`https://blooming-atoll-60288.herokuapp.com/api/cuisines`, {
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

  chooseCuisine(u:any){
    // console.log(u.id)
    fetch(`https://blooming-atoll-60288.herokuapp.com/api/restaurants/filter/${u.id}`, {
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

submit()
{
//   this.form = this.formbuilder.group({
//     // search:[],   
// });
// console.log(this.form.contains)

// return this.search;

this.search=document.getElementById("in");
const value=this.search.value;
fetch(`https://blooming-atoll-60288.herokuapp.com/api/restaurants/search/${value}`, {
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
