import { Component, OnInit } from '@angular/core';
import {BookCollection} from "~/app/models";
import {BooksService} from "~/app/services/books.service";

@Component({
    selector: 'ns-tab1',
    templateUrl: './tab1.component.html',
    styleUrls: ['./tab1.component.css']
})
export class Tab1Component implements OnInit {

    books: BookCollection = {};

    constructor(private booksService: BooksService) { }

    ngOnInit() {
        this.loadContent();
    }

    loadContent(event = null) {
        console.log("load content")
        this.booksService.getBooks().subscribe(res => {

                this.books = res;

                this.books.items.forEach(book => {
                    if (book.volumeInfo.imageLinks === undefined) {
                        book.volumeInfo.imageLinks = { smallThumbnail: 'assets/images/no_cover.jpg'};
                    }
                });

                if (event != null) {
                    event.target.complete();
                }
            }
            ,
            error => {

            });
    }

}
