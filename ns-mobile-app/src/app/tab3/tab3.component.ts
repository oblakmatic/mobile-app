import { Component, OnInit } from '@angular/core';
import {BookCollection} from "~/app/models";
import {BooksService} from "~/app/services/books.service";

@Component({
  selector: 'ns-tab3',
  templateUrl: './tab3.component.html',
  styleUrls: ['./tab3.component.css'],
  moduleId: module.id,
})
export class Tab3Component implements OnInit {

    searchClosed = false;
    books: BookCollection = {};

    isbn = "";
    author = "";
    title = "";
    keyword = "";

  constructor(private booksService: BooksService) { }

  ngOnInit() {

  }

    onSearchButton() {

        if (this.searchClosed) {
            this.searchClosed = false;
            return;
        }



        if (this.isbn.length + this.author.length + this.title.length + this.keyword.length === 0){
            alert({ message: "Please fill out at least one field.", okButtonText: "Ok" });
            return;
        }

        console.log(this.isbn,this.title, this.author, this.keyword)

        this.booksService.getBooksBySearch(this.isbn, this.author, this.title, this.keyword).subscribe(res => {

                this.books = res;
                this.searchClosed = true;
                this.books.items.forEach(book => {
                    if (book.volumeInfo.imageLinks === undefined)
                        book.volumeInfo.imageLinks = { smallThumbnail: 'assets/images/no_cover.jpg'}
                })

            },

            error => console.log(error)
        );


    }

}
