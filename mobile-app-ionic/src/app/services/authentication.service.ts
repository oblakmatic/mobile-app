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
            provider.
            this.angularFireAuth.auth
                .signInWithRedirect(provider, )
                .then(res => {
                    console.log("logged in")
                    console.log(res)
                    resolve(res);
                })
        })
    }

    logoutUser(){
        return new Promise((resolve, reject) => {
            if(firebase.auth().currentUser){
                firebase.auth().signOut()
                    .then(() => {
                        console.log('Logout');
                        resolve();
                    }).catch((error) => {
                    reject();
                });
            }
        })
    }

    userDetails(){
        return firebase.auth().currentUser;
    }
}