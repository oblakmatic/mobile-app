import { Component } from '@angular/core';
import {AuthenticateService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private router: Router, private authService: AuthenticateService) {}

    logoutUser(){
        console.log("init logout")
        this.authService.logoutUser()
            .then(res => {
                this.router.navigate(['']);
            })
    }

}
