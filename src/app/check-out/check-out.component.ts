import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
check(){
  alert("You have orderd successfully,Thanks for using Talabat")
}
}
