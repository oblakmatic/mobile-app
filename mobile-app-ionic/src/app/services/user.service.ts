import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {

    userToken: any;

    constructor(
        public db: AngularFirestore,
        public afAuth: AngularFireAuth
    ){}



    getCurrentUser(){

        this.afAuth.auth.getRedirectResult().then(res => {
            if (res.user) {
                console.log("KJ")
                console.log((<any> res).credential.accessToken);

                this.userToken = (<any> res).credential.accessToken;
            }
        });

        return new Promise<any>((resolve, reject) => {
            let user = firebase.auth().onAuthStateChanged(function(user){
                if (user) {
                    resolve(user);
                } else {
                    reject('No user logged in');
                }
            })


        })
    }

    updateCurrentUser(value){
        return new Promise<any>((resolve, reject) => {
            let user = firebase.auth().currentUser;
            user.updateProfile({
                displayName: value.name,
                photoURL: user.photoURL
            }).then(res => {
                resolve(res);
            }, err => reject(err))
        })
    }
}