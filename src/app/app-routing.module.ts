import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccountModule } from './account/account.module';
import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
import { ResturantDetailsComponent } from './resturant-details/resturant-details.component';
import { ResturantsListComponent } from './resturants-list/resturants-list.component';
import { UsersModule } from './users/users.module';

import { AuthGuard } from './_helpers';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent, canActivate: [AuthGuard]
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
{ path: 'users', loadChildren:  () => UsersModule, canActivate: [AuthGuard] },
{ path: 'account', loadChildren: ()=>AccountModule },
// {
//   path: ':id', component: ResturantDetailsComponent
// },


 
  
// { path: '**', redirectTo: '' },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
