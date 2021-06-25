import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddResturantComponent } from './add-resturant/add-resturant.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { CrudResturantComponent } from './crud-resturant/crud-resturant.component';
import { EditResturantComponent } from './edit-resturant/edit-resturant.component';
// import { SigninComponent } from './components/signin/signin.component';
// import { SignupComponent } from './components/signup/signup.component';
// import { UserProfileComponent } from './components/user-profile/user-profile.component';
// import { AboutComponent } from './about/about.component';
// import { AccountModule } from './account/account.module';
import { HomeComponent } from './home/home.component';
import { LetsGoComponent } from './lets-go/lets-go.component';
import { LoginComponent } from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { OfferComponent } from './offer/offer.component';
import { RegisterComponent } from './register/register.component';
import { ResturantDetailsComponent } from './resturant-details/resturant-details.component';
import { ResturantsListComponent } from './resturants-list/resturants-list.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import { VendorRegisterComponent } from './vendor-register/vendor-register.component';
 import { AuthGuard } from './_helpers/auth.guard';
// import { UsersModule } from './users/users.module';

// import { AuthGuard } from './_helpers';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  // { path: 'signin', component: SigninComponent },
  // { path: 'signup', component: SignupComponent },
  // { path: 'profile', component: UserProfileComponent },
  // {
  //   path: 'about',
  //   component: AboutComponent
  // },

  {
    path: 'allresturants',
    component: ResturantsListComponent
  },
  {
    path: 'offer',
    component: OfferComponent
  },
  {
  path: 'register',
  component: RegisterComponent
},
{
  path: 'myAccount',
  component: MyAccountComponent
},
{
  path: 'vendor-register',
  component: VendorRegisterComponent
},
{
  path: 'vendorLogin',
  component: VendorLoginComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: "letsGo",
  component: LetsGoComponent
},
// {
//   path: 'letsGo/:id',
//   loadChildren: () => import('./resturant-details/resturant-details.module').then(m => m.ResturantDetailsModule)
//   },
{
  path: "crudResturant",
  component: CrudResturantComponent, canActivate: [AuthGuard]
},
{
  path: "addResturant",
  component: AddResturantComponent
},
{
  path: "checkOut",
  component: CheckOutComponent
},
{
  path: "editResturant/:id",
  component: EditResturantComponent
},
// { path: 'users', loadChildren:  () => UsersModule, canActivate: [AuthGuard] },
// { path: 'account', loadChildren: ()=>AccountModule },
// {
//   path: 'allresturants/:id', component: ResturantDetailsComponent
// },
{
path: 'allresturants/:id',
loadChildren: () => import('./resturant-details/resturant-details.module').then(m => m.ResturantDetailsModule)
},

  
// { path: '**', redirectTo: '' },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
