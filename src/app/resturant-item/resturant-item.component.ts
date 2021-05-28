import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resturant-item',
  templateUrl: './resturant-item.component.html',
  styleUrls: ['./resturant-item.component.scss']
})
export class ResturantItemComponent implements OnInit {
  @Input() resturant: any;
  constructor() { }

  ngOnInit(): void {
    
  }

}
