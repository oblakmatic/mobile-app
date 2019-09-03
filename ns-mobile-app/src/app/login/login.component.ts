import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

import {Observable} from 'rxjs';
import {ITnsOAuthTokenResult} from "nativescript-oauth2";
import {RouterExtensions} from "nativescript-angular";
import {Page} from "tns-core-modules/ui/page";
import {UserService} from "~/app/services/user.service";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

    constructor(private routerExtensions: RouterExtensions, private authService: AuthenticationService, private userService: UserService) {
    }

    ngOnInit() {

    }

    googleLogin() {
        this.authService.loginUser().then((result: ITnsOAuthTokenResult) => {


            this.userService.userToken = result.accessToken;
            this.routerExtensions
                .navigate(["/tabs"])
                .catch(err => console.log("error navigating to /tabs: " + err));
        });
    }

    signOut() {

    }

}
