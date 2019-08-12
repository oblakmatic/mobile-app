import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable()
export class AuthenticateService {

    constructor(public angularFireAuth: AngularFireAuth){}

    loginUser(){
        return new Promise<any>((resolve, reject) => {
            let provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            provider.addScope('https://www.googleapis.com/auth/books')
            this.angularFireAuth.auth.signInWithRedirect(provider).then(result =>{
                    resolve(result);
                });

        });
    }

    logoutUser(){
        return new Promise<any>((resolve, reject) => {
            this.angularFireAuth.auth
                .signOut()
                .then(res => {
                    console.log("logged out")
                    resolve(res);
                });
            });
    }


    userDetails(){
        return firebase.auth().currentUser;
    }
}