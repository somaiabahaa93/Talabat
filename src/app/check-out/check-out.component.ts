import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {
  cart!:Cart;
  items:any;
  constructor() { }

  ngOnInit(): void {
    this.cart=JSON.parse(localStorage.getItem("cart")||'{}');
    this.items=localStorage.getItem("items")
  }
check(){
  alert("You have orderd successfully,Thanks for using Talabat")
}
}
