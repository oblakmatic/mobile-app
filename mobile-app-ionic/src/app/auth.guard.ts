import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from './services/user.service';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        public afAuth: AngularFireAuth,
        public userService: UserService,
        private router: Router
    ) {}

    canActivate(): Promise<boolean>{
        return new Promise((resolve, reject) => {
            this.userService.getCurrentUser()
                .then(user => {
                    console.log("navigate to tabs")
                    this.router.navigate(['app']);
                    return resolve(false);
                }, err => {
                    return resolve(true);
                })
        })
    }
}