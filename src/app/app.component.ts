// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './shared/token.service';
import { AuthStateService } from './shared/auth-state.service';
// import { AccountService } from './_services';
// import { User } from './_models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Talabat';
  // user!: User;
  // user!: User;
  // user!: User;
  // user!: User;
  // user!: User;
  // user!: User;
  // user!: User;
  // user!: User;
  isSignedIn: boolean = false;
  constructor(
    // private auth: AuthStateService,
    // public router: Router,
    // public token: TokenService,
  ) {
      // this.accountService.user.subscribe(x => this.user = x);
  }
  // ngOnInit() {
  //   this.auth.userAuthState.subscribe(val => {
  //       this.isSignedIn = val;
  //   });
  // }

  // signOut() {
  //   this.auth.setAuthState(false);
  //   this.token.removeToken();
  //   this.router.navigate(['login']);
  // }

//   logout() {
//     this.accountService.logout();
// }
}
