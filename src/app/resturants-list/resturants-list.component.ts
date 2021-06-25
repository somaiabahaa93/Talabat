import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import{Resturant} from '../models/resturant';
import { ResturantsService } from '../services/resturants.service';


@Component({
  selector: 'app-resturants-list',
  templateUrl: './resturants-list.component.html',
  styleUrls: ['./resturants-list.component.scss']
})
export class ResturantsListComponent implements OnInit {
  resturants: Resturant[] = [];
  form!: FormGroup;
  search!:any;


  constructor(private resturantService: ResturantsService) { }

  ngOnInit(): void {
    this.resturantService.getResturants().subscribe((res: any) => {
      this.resturants = res.data;
      console.log(this.resturants)

    

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

}
