import { Injectable } from '@angular/core';
import {ITnsOAuthTokenResult, TnsOAuthClient} from "nativescript-oauth2";

@Injectable()
export class AuthenticationService {

    private client: TnsOAuthClient = null;

    constructor() { }

    public loginUser(): Promise<ITnsOAuthTokenResult> {

        this.client = new TnsOAuthClient("google");

        return new Promise<ITnsOAuthTokenResult>((resolve, reject) => {
            this.client.loginWithCompletion(
                (tokenResult: ITnsOAuthTokenResult, error) => {
                    if (error) {
                        console.error("back to main page with error: ");
                        console.error(error);
                        reject(error);
                    } else {
                        resolve(tokenResult);
                    }
                }
            );
        });
    }

    public logoutUser() {
        if (this.client) {
            try {
                this.client.logout();
            }
            catch (e) {
                console.log(e)
            }

        }
    }
}
