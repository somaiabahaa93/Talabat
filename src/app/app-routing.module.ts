import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
// import { AboutComponent } from './about/about.component';
// import { AccountModule } from './account/account.module';
import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
import { ResturantDetailsComponent } from './resturant-details/resturant-details.component';
import { ResturantsListComponent } from './resturants-list/resturants-list.component';
import { VendorRegisterComponent } from './vendor-register/vendor-register.component';
// import { UsersModule } from './users/users.module';

// import { AuthGuard } from './_helpers';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: UserProfileComponent },
  // {
  //   path: 'about',
  //   component: AboutComponent
  // },
  {
    path: 'allresturants',
    component: ResturantsListComponent
  },
//   {
//   path: 'register',
//   component: RegisterComponent
// },
{
  path: 'vendor-register',
  component: VendorRegisterComponent
},
// {
//   path: 'login',
//   component: LoginComponent
// },
// { path: 'users', loadChildren:  () => UsersModule, canActivate: [AuthGuard] },
// { path: 'account', loadChildren: ()=>AccountModule },
{
  path: 'allresturants/:id', component: ResturantDetailsComponent
},
 
  
// { path: '**', redirectTo: '' },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
