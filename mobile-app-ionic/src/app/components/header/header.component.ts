import {Component, Input, OnInit} from '@angular/core';
import {AuthenticateService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input()
  title: string;

  constructor(private authService: AuthenticateService, private router: Router, public userService: UserService) { }

  ngOnInit() {}

    logoutUser(){
        this.authService.logoutUser()
            .then(res => {
                this.router.navigate(['']);
            });
    }


}
