import {Component, Input, OnInit} from '@angular/core';
import {BookCollection} from "~/app/models";
import {RouterExtensions} from "nativescript-angular";

@Component({
    selector: 'ns-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']

})
export class ListComponent implements OnInit {

    @Input()
    books: BookCollection = {};

    constructor(private routerExtensions: RouterExtensions) { }

    ngOnInit() {
    }

    public openDetails(id){

        this.routerExtensions.navigate(['/detail', id]);
    }

}

