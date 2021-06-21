import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { AuthService } from '../guard/auth.service';

import {  Input } from '@angular/core';
// import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare const L: any;
@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Delivery Address</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <div style="height: 90vh;width: 70vh;" id="map"> </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Delivery Here</button>
    </div>
  `
})
export class NgbdModalContent {
  // @Input() name: any;

  constructor(public activeModal: NgbActiveModal) {}
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // isLogin:boolean=false;
  title = 'Map';
  search:string='';
  constructor( private http:HttpClient,private modalService: NgbModal) { }
  

  ngOnInit() {
    // this.isLogin= this.authService.isLoggedIn();
  //   this.http.get('http://localhost:8000/api/user').subscribe({
  //     next:(res: any)=>{
  //         console.log(res);
  //     },
  //     error:err=>{console.log(err);}
  // });

  // if (!navigator.geolocation) {
  //   console.log('location is not supported');
  // }
  // navigator.geolocation.getCurrentPosition((position) => {
  //   const coords = position.coords;
  //   const latLong = [coords.latitude, coords.longitude];
  //   console.log(
  //     `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
  //   );
  //   let mymap = L.map('map').setView(latLong, 13);
  //   let search = L.Control.geocoder().addTo(mymap);
  //   console.log(search);
    
  // //   mymap.on('search', function (result) {
  // //     L.marker([result.x, result.y]).addTo(mymap)
  // //     console.log(
  // //       `lat: ${result.latitude}, lon: ${result.longitude}`
  // //     );
  // // });

  //   L.tileLayer(
  //     'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidG9rYWF0dGlhaCIsImEiOiJja3E0aXV4MmMwdnNuMm9rYWhmb2R0cmYwIn0.REEJ6A0E0dhZvRptea7Mng',
  //     {
  //       attribution:
  //         'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  //       maxZoom: 18,
  //       id: 'mapbox/streets-v11',
  //       tileSize: 512,
  //       zoomOffset: -1,
  //       accessToken: 'your.mapbox.access.token',
  //     }
  //   ).addTo(mymap);

  //   let marker = L.marker(latLong).addTo(mymap);

  //   marker.bindPopup('<b>You are here</b>').openPopup();

  //   let popup = L.popup()
  //     .setLatLng(latLong)
  //     .setContent('Deliver here ?')
  //     .openOn(mymap);
  // });
  // this.watchPosition();



  }

  
  // logout(){
    //  this.authService.logout();
    // this.isLogin=false;
  // }

  open() {
    
    


    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latLong = [coords.latitude, coords.longitude];
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      let mymap = L.map('map').setView(latLong, 13);
      let search = L.Control.geocoder().addTo(mymap);
      console.log(search);
      
    //   mymap.on('search', function (result) {
    //     L.marker([result.x, result.y]).addTo(mymap)
    //     console.log(
    //       `lat: ${result.latitude}, lon: ${result.longitude}`
    //     );
    // });
  
      L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidG9rYWF0dGlhaCIsImEiOiJja3E0aXV4MmMwdnNuMm9rYWhmb2R0cmYwIn0.REEJ6A0E0dhZvRptea7Mng',
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'your.mapbox.access.token',
        }
      ).addTo(mymap);
  
      let marker = L.marker(latLong).addTo(mymap);
  
      marker.bindPopup('<b>You are here</b>').openPopup();
  
      let popup = L.popup()
        .setLatLng(latLong)
        .setContent('Deliver here ?')
        .openOn(mymap);
    });
    this.watchPosition();

    const modalRef = this.modalService.open(NgbdModalContent);
    // modalRef.componentInstance.name = 'World';

  }
  watchPosition() {
    let desLat = 0;
    let desLon = 0;
    let id = navigator.geolocation.watchPosition(
      (position) => {
        // console.log(
        //   `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
        // );
        if (position.coords.latitude === desLat) {
          navigator.geolocation.clearWatch(id);
        }
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }
}
