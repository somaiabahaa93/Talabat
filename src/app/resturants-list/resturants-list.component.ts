import { Component, OnInit } from '@angular/core';
import{Resturant} from '../models/resturant';
import { ResturantsService } from '../services/resturants.service';

@Component({
  selector: 'app-resturants-list',
  templateUrl: './resturants-list.component.html',
  styleUrls: ['./resturants-list.component.scss']
})
export class ResturantsListComponent implements OnInit {
  resturants: Resturant[] = [];

  constructor(private _ProductService: ResturantsService) { }

  ngOnInit(): void {
    this._ProductService.getResturants().subscribe((res: any) => {
      this.resturants = res.data;
      console.log(this.resturants)

    

    });
  }

}
