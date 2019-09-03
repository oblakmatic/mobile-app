import {Component, ElementRef, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Book, BookCollection} from "~/app/models";
import {BooksService} from "~/app/services/books.service";
import { confirm } from "tns-core-modules/ui/dialogs";
import {RouterExtensions} from "nativescript-angular";

@Component({
    selector: 'ns-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {

    id: any;
    read = false;
    bookmarked = false;
    book: Book;

    constructor(private routerExtensions: RouterExtensions,
                private route: ActivatedRoute,
                private booksService: BooksService,
                private el: ElementRef) {}

    ngOnInit() {
        this.id = this.route.snapshot.params.id;


        this.booksService.getBookById(this.id).subscribe((res: Book) => {

            this.book = res;

            if (this.book.volumeInfo.description == null || this.book.volumeInfo.description.length < 2){
                this.read = true;
                this.book.volumeInfo.description = 'No description available';
            }


            let ISBN = res.volumeInfo.industryIdentifiers[0].identifier;
            this.booksService.isBookAdded(ISBN).subscribe( (result: BookCollection) => {

                    console.log(result)
                    if (result.totalItems > 0){
                        this.bookmarked = true;

                    }

                }
            );

        });


    }

    goBack(){
        this.routerExtensions.back();
    }

    readMore(){
        if(!this.read){
            this.el.nativeElement.querySelector('p.hide').classList.remove('hide');
            this.read = true;
        }

    }

    addBookmarkButton(){
        this.presentAlert('Add this book to your collection?');
    }

    removeBookmarkButton(){
        this.presentAlert('Remove this book from your collection?');
    }

    presentAlert(text: string) {

        let options = {
            message: text,
            okButtonText: "Yes",
            cancelButtonText: "No"
        };

        confirm(options).then((result: boolean) => {
            if (result){
                if (this.bookmarked)
                    this.booksService.removeBook(this.book.id).subscribe(res => this.bookmarked=!this.bookmarked);

                else
                    this.booksService.addBook(this.book.id).subscribe(res => this.bookmarked=!this.bookmarked);

            }
        });

    }
}
