import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {NavController, Platform} from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {GooglePlus} from '@ionic-native/google-plus/ngx';
import OAuthCredential = firebase.auth.OAuthCredential;

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    user: Observable<firebase.User>;

    constructor(private afAuth: AngularFireAuth,
                private authService: AuthenticateService) {

        this.user = this.afAuth.authState;

    }

    ngOnInit() {

    }

    googleLogin() {
        this.authService.loginUser();
    }

    signOut() {
        this.afAuth.auth.signOut();
    }

}
