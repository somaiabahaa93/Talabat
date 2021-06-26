// import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from '../emitters/emitters';
import { Cart } from '../models/cart';
import { CartItem } from '../models/cart-item';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
// import {Component} from '@angular/core';
// import { AuthStateService } from '../shared/auth-state.service';
// import { TokenService } from '../shared/token.service';
// import { TokenService } from './shared/token.service';
// import { AuthStateService } from './shared/auth-state.service';
// @Component({
//   selector: 'ngbd-popover-basic',
//   templateUrl: `<button type="button" class="btn btn-outline-secondary mr-2" placement="bottom"
//   ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." popoverTitle="Popover on bottom">
// Popover on bottom
// </button>`
// })
// export class NgbdPopoverBasic {
// }
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {
  // isSignedIn: boolean = false;
  // authenticated=false;
  // token!: string;

  // constructor(
  //   // private auth: AuthStateService,
  //   public router: Router,
  //   private http:HttpClient
  //   // public token: TokenService,
  // ) { }

  
    // this.auth.userAuthState.subscribe(val => {
    //     this.isSignedIn = val;
    // });
    // Emitters.authEmitter.subscribe({generatorOrNext:(auth:boolean)=>{this.authenticated=auth;}});
  

  // logout():void {
  //   localStorage.getItem('token');
  //   this.http.post("http://localhost:8000/api/logout",this.token).subscribe({
  //     next:(res: any)=>{
  //       // this.authenticated=false;
  //       // this.token = res['token'];
        
  //         console.log(res);
  //         // this.router.navigate(['']);
      
  //     }
  // });;

  //   // this.auth.setAuthState(false);
  //   // this.token.removeToken();
  //   // this.router.navigate(['login']);
  // }


  user!:User
  currentUser:any
  cart!:Cart;
  items:any;
  url:any;

  cartItem!:CartItem;



  //  isLoggedIn = this.user && this.user.token;


    constructor(private authService: AuthService) {
      
        this.authService.user.subscribe(user => this.user = user);
        // this.authService.logout();
        // localStorage.removeItem('user');
        // this.user=localStorage.getItem('user');
        
         this.currentUser=localStorage.getItem('user');
         this.cart=JSON.parse(localStorage.getItem("cart")||'{}');
         this.items=localStorage.getItem("items")
         console.log(this.cart.id)

         this.cart=JSON.parse(localStorage.getItem("cart")||'{}');
         console.log(this.cart)
         this.url=localStorage.getItem("items")
          fetch(this.url, {
                       method: 'GET', 
                       // credentials: 'include',
                       headers: {
                         'Authorization': `Bearer ${this.user.token}`,
                       'Content-Type': 'application/json',
                       "Accept":"application/json",
                       
         
                     }
                   })
                   .then(response => response.json())
                     
                     .then(async data=>{
                       
                         this.items=data.data;
                         console.log(this.items)
                         
                         
                     })
                  
                   .catch((error) => {
                      console.error('Error here is:', error);
                   });



    }
    
   
    logout() {

      // this.currentUser=localStorage.getItem('user');
        this.authService.logout();
    }

    plus(i:any){

      console.log(i)
      console.log(this.user.token)
      // var bearer = 'Bearer ' +  localStorage.getItem('user');
                    fetch(`https://blooming-atoll-60288.herokuapp.com/api/restaurants/${i.restaurant_id}/menuitems/${i.menu_item_id}/cartitems`, {
                    method: 'POST', 
                    // credentials: 'include',
                    headers: {
                      'Authorization': `Bearer ${this.user.token}`,
                    'Content-Type': 'application/json',
                    "Accept":"application/json",
                    
                    
    
                    
                    // 'Authorization': bearer,
                  }
                })
                .then(response => response.json())
                .then(async data => {
                  
                  console.log('Success:', data.cart.href.cartitems);
                  console.log('Success:', data);
    
                  this.cart=data.cart;
                  this.cartItem=data.cartitem;
                   localStorage.setItem("cart",JSON.stringify(this.cart))
                  // data.cart-item
                  // console.log(this.cart)
                  //  console.log(this.cartItem)
                    this.items=data.cart.href.cartitems;
                    console.log(this.items)
                    localStorage.setItem("items",this.items)
                    let res = await fetch(this.items, {
                      method: 'GET',
                      headers: {
                        'Authorization': `Bearer ${this.user.token}`,
                        'Content-Type': 'application/json',
                        "Accept": "application/json"
                      }
                    })
                    let resobj=await res.json();
                    this.items=resobj.data;
                    console.log(this.items)
                    // for(let i=0;i<=this.items.lenght;i++)
                    // {
                    //   console.log(this.items[i].menu_item_name);
    
                      
                    // }
                    
                  // let resobj= res.json();
                  // for(let i=0;i<resobj.length;i++)
                  // {
                  //   let name=
                  // }
                  // console.log(resobj)
                  
    
    
                  // console.log(this.cartData)
                  // cat.menuitems=data.data;
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
                    
    
      minus(i:any){
    
      console.log(i)
      console.log(this.user.token)
      // var bearer = 'Bearer ' +  localStorage.getItem('user');
                          // http://127.0.0.1:8000/api/restaurants/4/menuitems/6/carts/2/cartitems/2
                    fetch(`https://blooming-atoll-60288.herokuapp.com/api/restaurants/${i.restaurant_id}/menuitems/${i.menu_item_id}/carts/${i.cart_id}/cartitems/${i.id}`, {
                    method: 'POST', 
                    // credentials: 'include',
                    headers: {
                      'Authorization': `Bearer ${this.user.token}`,
                    'Content-Type': 'application/json',
                    "Accept":"application/json",
                    
                    
    
                    
                    // 'Authorization': bearer,
                  }
                })
                .then(response => response.json())
                .then(async data => {
                  
                  // console.log('Success:', data.cart.href.cartitems);
                  this.cart=data.cart;
                  this.cartItem=data.cartitem;
                  // data.cart-item
                  // console.log(this.cart)
                  //  console.log(this.cartItem)
                   localStorage.setItem("cart",JSON.stringify(this.cart))
                    this.items=data.cart.href.cartitems;
                    // console.log(this.items)
                    localStorage.setItem("items",this.items)
                    let res = await fetch(this.items, {
                      method: 'GET',
                      headers: {
                        'Authorization': `Bearer ${this.user.token}`,
                        'Content-Type': 'application/json',
                        "Accept": "application/json"
                      }
                    })
                    let resobj=await res.json();
                    this.items=resobj.data;
                    // console.log(this.items)
                    // for(let i=0;i<=this.items.lenght;i++)
                    // {
                    //   console.log(this.items[i].menu_item_name);
    
                      
                    // }
                    
                  // let resobj= res.json();
                  // for(let i=0;i<resobj.length;i++)
                  // {
                  //   let name=
                  // }
                  // console.log(resobj)
                  
    
    
                  // console.log(this.cartData)
                  // cat.menuitems=data.data;
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
      destoryCart(i:any){

        console.log(i)
        console.log(this.user.token)
        // var bearer = 'Bearer ' +  localStorage.getItem('user');
                            // http://127.0.0.1:8000/api/restaurants/4/carts/2/cartitems/2
                      fetch(`https://blooming-atoll-60288.herokuapp.com/api/restaurants/${i.restaurant_id}/carts/${i.cart_id}/cartitems/${i.id}`, {
                      method: 'DELETE', 
                      // credentials: 'include',
                      headers: {
                        'Authorization': `Bearer ${this.user.token}`,
                      'Content-Type': 'application/json',
                      "Accept":"application/json",
                      
                      
      
                      
                      // 'Authorization': bearer,
                    }
                  })
                  .then(response => response.json())
                  .then(async data => {
                    
                    // console.log('Success:', data.cart.href.cartitems);
                    this.cart=data.cart;
                    this.cartItem=data.cartitem;
                    // data.cart-item
                    // console.log(this.cart)
                    //  console.log(this.cartItem)
                     localStorage.setItem("cart",JSON.stringify(this.cart))
                      this.items=data.cart.href.cartitems;
                      // console.log(this.items)
                      localStorage.setItem("items",this.items)
                      
                      let res = await fetch(this.items, {
                        method: 'GET',
                        headers: {
                          'Authorization': `Bearer ${this.user.token}`,
                          'Content-Type': 'application/json',
                          "Accept": "application/json"
                        }
                      })
                      let resobj=await res.json();
                      this.items=resobj.data;
                      // console.log(this.items)
                      // for(let i=0;i<=this.items.lenght;i++)
                      // {
                      //   console.log(this.items[i].menu_item_name);
                    
                        
                      // }
                      
                    // let resobj= res.json();
                    // for(let i=0;i<resobj.length;i++)
                    // {
                    //   let name=
                    // }
                    // console.log(resobj)
                    
      
      
                    // console.log(this.cartData)
                    // cat.menuitems=data.data;
                    // displaydata(data);
                    
                    // this.resdata=data;
                    // console.log( data.data.length);
                    
                  })
                  .catch((error) => {
                    console.error('Error:', error);
                  });
                  if(this.items.length===1)
                  {
                   localStorage.removeItem("items");
                   localStorage.removeItem("cart");
                   this.items=[];
                   this.cart=JSON.parse(localStorage.getItem("cart")||'{}')
                  //  this.cart.delivery_fees=0
                  //  this.cart.id=0
                  //  this.cart.sub_total=0
                  //  this.cart.total_price=0
                  //  this.cart.href=''
      
                   
                   
                   
                  }
                   console.log(this.cart);
                  // this.i=0;
                  // while(this.i<this.length){}
                  // console.log(this.resdata);
      
        }

}
