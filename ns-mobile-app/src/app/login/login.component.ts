import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

import {Observable} from 'rxjs';
import {ITnsOAuthTokenResult} from "nativescript-oauth2";
import {RouterExtensions} from "nativescript-angular";
import {Page} from "tns-core-modules/ui/page";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

   // user: Observable<firebase.User>;

    constructor(private routerExtensions: RouterExtensions, private authService: AuthenticationService) {
    }

    ngOnInit() {

    }

    googleLogin() {
        this.authService.loginUser().then((result: ITnsOAuthTokenResult) => {
            console.log("back to login component with token " + result.accessToken);
            this.routerExtensions
                .navigate(["/items"])
                .then(() => console.log("navigated to /authenticated"))
                .catch(err => console.log("error navigating to /authenticated: " + err));
        });
    }

    signOut() {

    }

}
