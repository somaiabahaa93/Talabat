import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
   search!:any;

  constructor(private resturantService: ResturantsService, private router:Router,private formbuilder:FormBuilder,) { }

  ngOnInit(): void {
    // this.resturantService.getResturants().subscribe((res: any) => {
    //   this.resturants = res.data;
    //   console.log(this.resturants)
    // console.log(this.data)
    const lat=localStorage.getItem("lat");
    const lon=localStorage.getItem("lon");



    fetch(`http://127.0.0.1:8000/api/restaurants/nearby/${lat}/${lon}`, {
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

    

    // });
  }

  Name()
  {
    fetch(`http://127.0.0.1:8000/api/sortbyname`, {
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
    fetch(`http://127.0.0.1:8000/api/sortbyminorder`, {
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
    fetch(`http://127.0.0.1:8000/api/sortbydate`, {
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

  // Rate()
  // {
  //   fetch(`http://127.0.0.1:8000/api/sortbyrating`, {
  //     method: 'GET', 
  //     // credentials: 'include',
  //     headers: {
  //       // 'Authorization': `Bearer ${this.user.token}`,
  //     'Content-Type': 'application/json',
  //     "Accept":"application/json",
      

  //   }
  // })
  // .then(response => response.json())
  // .then(async data => {
    
  //   console.log('Success:', data);
  //   this.resturant = data;
  //   // console.log(this.resturants)
  
      
    
  //  })
  // // .then(async data=>{
  // //   this.router.navigate(['crudResturant']);
  // //   this.resturantService.getResturants().subscribe((res: any) => {
  // //     this.resturants = res.data;
  // //     // console.log(res.error)
  // // });
  // // })
  // .catch((error) => {
  //   console.error('Error:', error);
  // });

    
  // }

submit()
{
//   this.form = this.formbuilder.group({
//     // search:[],   
// });
// console.log(this.form.contains)

// return this.search;

this.search=document.getElementById("in");
const value=this.search.value;
fetch(`http://127.0.0.1:8000/api/restaurants/search/${value}`, {
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
}
