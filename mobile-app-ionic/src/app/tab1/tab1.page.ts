import {Component, OnInit} from '@angular/core';

import { BooksService } from '../services/books-service.service';
import {BookCollection} from '../models/models';
import {map, catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {debug} from 'util';
@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

    books: BookCollection = {};

    constructor(private booksService: BooksService) {}

    ngOnInit(): void {

       this.booksService.getBooks().subscribe(res => {

           this.books = res;

           this.books.items.forEach(book => {
               if (book.volumeInfo.imageLinks === undefined)
                   book.volumeInfo.imageLinks = { smallThumbnail: "assets/images/no_cover.jpg"}
           })
       });
    }




}
