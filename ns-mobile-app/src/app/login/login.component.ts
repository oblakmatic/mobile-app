import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

import {Observable} from 'rxjs';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

   // user: Observable<firebase.User>;

    constructor(
                private authService: AuthenticationService) {

    //    this.user = this.afAuth.authState;

    }

    ngOnInit() {

    }

    googleLogin() {
        this.authService.loginUser();
    }

    signOut() {

    }

}
