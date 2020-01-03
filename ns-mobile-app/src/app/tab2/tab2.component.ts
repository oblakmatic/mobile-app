import { Component, OnInit } from '@angular/core';
import {BooksService} from "~/app/services/books.service";
import {BookCollection} from "~/app/models";

@Component({
  selector: 'ns-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css'],
  moduleId: module.id,
})
export class Tab2Component implements OnInit {

    books: BookCollection;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
      this.loadContent();
  }


    loadContent(event = null) {
        this.booksService.getBookmarkedBooks().subscribe(res => {

                this.books = res;

                this.books.items.forEach(book => {
                    if (book.volumeInfo.imageLinks === undefined) {
                        book.volumeInfo.imageLinks.smallThumbnail = 'assets/images/no_cover.jpg';
                    }
                    else{
                        let re = /http:/gi;
                        let str = book.volumeInfo.imageLinks.smallThumbnail;
                        let st = str.replace(re, "https:");
                        book.volumeInfo.imageLinks.smallThumbnail = st;
                    }
                })




            }
            ,
            error => {

            });
    }

}
