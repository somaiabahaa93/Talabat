import { Component, OnInit } from '@angular/core';
import { Resturant } from '../models/resturant';
import { ResturantsService } from '../services/resturants.service';

@Component({
  selector: 'app-lets-go',
  templateUrl: './lets-go.component.html',
  styleUrls: ['./lets-go.component.scss']
})

export class LetsGoComponent implements OnInit {


   resturants: Resturant[] = [];

  constructor(private resturantService: ResturantsService) { }

  ngOnInit(): void {
    this.resturantService.getResturants().subscribe((res: any) => {
      this.resturants = res.data;
      console.log(this.resturants)

    

    });
  }

}
