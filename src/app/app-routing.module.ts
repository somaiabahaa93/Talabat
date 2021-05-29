import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResturantDetailsComponent } from './resturant-details/resturant-details.component';
import { ResturantsListComponent } from './resturants-list/resturants-list.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'allresturants',
    component: ResturantsListComponent
  },
//   {
//   path: 'register',
//   component: RegisterComponent
// },
// {
//   path: 'login',
//   component: LoginComponent
// },
{
  path: ':id', component: ResturantDetailsComponent
},
{ path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
{ path: 'account', loadChildren: accountModule },

 
  
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
