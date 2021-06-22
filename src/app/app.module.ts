import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
// import { LoginComponent } from './components/login/login.component';
// import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './home/home.component';
// import { NotFoundComponent } from './components/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DashboardComponent } from './dashboard/dashboard.component';

// import { AuthService } from './guard/auth.service';
// import { AuthGuard } from './guard/auth.guard';
// import { TokenService } from './guard/token.service';
// import { RestaurantService } from './services/restaurant.service';
// import { NavbarComponent } from './components/navbar/navbar.component';
// import { RestaurantsManagerComponent } from './restaurants-manager/restaurants-manager.component';
// import {MatTableModule} from '@angular/material/table';
// import {MatDialogModule} from '@angular/material/dialog';
// import { ViewRestaurntsComponent } from './restaurants-manager/view-restaurnts/view-restaurnts.component';
// import {NgxPrintModule} from 'ngx-print';
// import { EditRestaurntsComponent } from './restaurants-manager/edit-restaurnts/edit-restaurnts.component';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {AutosizeModule} from 'ngx-autosize';
// import { DeleteRestaurntsComponent } from './restaurants-manager/delete-restaurnts/delete-restaurnts.component';
// import { AddRestaurantsComponent } from './restaurants-manager/add-restaurants/add-restaurants.component';
// import { MenuManagerComponent } from './menu-manager/menu-manager.component';
// import { ViewMenuComponent } from './menu-manager/view-menu/view-menu.component';
// import { EditMenuComponent } from './menu-manager/edit-menu/edit-menu.component';
// import { AddMenuComponent } from './menu-manager/add-menu/add-menu.component';
// import { DeleteMenuComponent } from './menu-manager/delete-menu/delete-menu.component';
// import {MatSelectModule} from '@angular/material/select';
// import { OrdersManagerComponent } from './orders-manager/orders-manager.component';
// import { EditOrderComponent } from './orders-manager/edit-order/edit-order.component';
// import { DeleteOrderComponent } from './orders-manager/delete-order/delete-order.component';
// import { AddOrderComponent } from './orders-manager/add-order/add-order.component';
// import { ViewOrderComponent } from './orders-manager/view-order/view-order.component';
// import {MatSnackBarModule} from '@angular/material/snack-bar';
// import {MatCardModule} from '@angular/material/card';
// import { AboutComponent } from './about/about.component';
import { ResturantsListComponent } from './resturants-list/resturants-list.component';
import { ResturantItemComponent } from './resturant-item/resturant-item.component';
// import { MapComponent } from './map/map.component';

import { ResturantDetailsComponent } from './resturant-details/resturant-details.component';
import { VendorRegisterComponent } from './vendor-register/vendor-register.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { SigninComponent } from './components/signin/signin.component';
// import { SignupComponent } from './components/signup/signup.component';
// import { UserProfileComponent } from './components/user-profile/user-profile.component';
// import { AuthInterceptor } from './shared/auth.interceptor';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ResturantDetailsModule } from './resturant-details/resturant-details.module';
// import { JwtInterceptor } from './_helpers/jwt.interceptor';
// import { ErrorInterceptor } from './_helpers/error.interceptor';
import { LetsGoComponent } from './lets-go/lets-go.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { CrudResturantComponent } from './crud-resturant/crud-resturant.component';
import { AddResturantComponent } from './add-resturant/add-resturant.component';
import { EditResturantComponent } from './edit-resturant/edit-resturant.component';
// import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';


// import { CustomerRegisterComponent } from './customer-register/customer-register.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { AlertComponent } from './_components/alert/alert.component';
// import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './_helpers';
// import { CustomerManagerComponent } from './customer-manager/customer-manager.component';

// import { DeleteCustomerComponent } from './customer-manager/delete-customer/delete-customer.component';
// import { CustomerLoginComponent } from './components/customer-login/customer-login.component';
// import { RestaurantsPageComponent } from './restaurants-page/restaurants-page.component';
// import { MenuPageComponent } from './menu-page/menu-page.component';
// import { RestaurantMenusComponent } from './restaurant-menus/restaurant-menus.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // AboutComponent,
    ResturantsListComponent,
    ResturantItemComponent,
    ResturantDetailsComponent,
    VendorRegisterComponent,
    // LoginComponent,
    // RegisterComponent,
    // AlertComponent,
    
    // MapComponent
    
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    LetsGoComponent,
    VendorLoginComponent,
    MyAccountComponent,
    CrudResturantComponent,
    AddResturantComponent,
    EditResturantComponent,
    // SigninComponent,
    // SignupComponent,
    // UserProfileComponent,
    // CustomerRegisterComponent,
    
    // NotFoundComponent,
    // DashboardComponent,
    // NavbarComponent,
    // RestaurantsManagerComponent,
    // // ViewRestaurants,
    // // ViewComponent,
    // ViewRestaurntsComponent,
    // EditRestaurntsComponent,
    // DeleteRestaurntsComponent,
    // AddRestaurantsComponent,
    // MenuManagerComponent,
    // ViewMenuComponent,
    // EditMenuComponent,
    // AddMenuComponent,
    // DeleteMenuComponent,
    // OrdersManagerComponent,
    // EditOrderComponent,
    // DeleteOrderComponent,
    // AddOrderComponent,
    // ViewOrderComponent,
    // CustomerManagerComponent,

    // DeleteCustomerComponent,

    // CustomerLoginComponent,

    // RestaurantsPageComponent,

    // MenuPageComponent,

    // RestaurantMenusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    ResturantDetailsModule,
   
    // NgxPrintModule,
   
    // AutosizeModule,
    
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true
    // }
    // AuthService,
    // AuthGuard,
    // RestaurantService,
    // {
    //   provide:HTTP_INTERCEPTORS,
    //   useClass:TokenService,
    //   multi:true
    // }
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }