import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    validationsForm: FormGroup;
    errorMessage: string = '';

    provider = new firebase.auth.GoogleAuthProvider();

    constructor(

        private navCtrl: NavController,
        private authService: AuthenticateService,
        private router: Router

    ) { }

    ngOnInit() {

    }



    tryGoogleLogin(){
        console.log("init login")
        this.authService.loginUser()
            .then(res => {
                this.router.navigate(['app']);
            })
    }

}
