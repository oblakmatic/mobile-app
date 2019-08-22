import {Component, Input, OnInit} from '@angular/core';
import {BookCollection} from "~/app/models";

@Component({
    selector: 'ns-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    @Input()
    books: BookCollection = {};

    constructor() { }

    ngOnInit() {
    }

}
