import { Component, OnInit } from '@angular/core';
import {SelectedIndexChangedEventData} from "tns-core-modules/ui/tab-view";
import {Page} from "tns-core-modules/ui/page";
import {AuthenticationService} from "~/app/services/authentication.service";
import {RouterExtensions} from "nativescript-angular";

@Component({
  selector: 'ns-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

    public tabSelectedIndex: number;

    constructor(private page: Page, private authService: AuthenticationService, private routerExtensions: RouterExtensions) {
        this.tabSelectedIndex = 0;
    }

    ngOnInit() {
        this.page.actionBar.title = "Recommended";
    }

    onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
        if (args.oldIndex !== -1) {
            const newIndex = args.newIndex;
            if (newIndex === 0) {
                this.page.actionBar.title = "Recommended";
            } else if (newIndex === 1) {
                this.page.actionBar.title = "Bookmarks";
            } else if (newIndex === 2) {
                this.page.actionBar.title = "Search";
            }
        }
    }

    logout(){
        this.authService.logoutUser();

    }


}
