import { Component } from '@angular/core';
import {BooksService} from '../services/books-service.service';
import {BookCollection} from '../models/models';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  books: BookCollection;

  constructor(private booksService: BooksService, private toastController: ToastController) {}



    ngOnInit(): void {
        this.loadContent();

    }

    doRefresh(event) {
        console.log('Begin async operation');

        this.loadContent(event);

    }


    loadContent(event = null) {
        this.booksService.getBookmarkedBooks().subscribe(res => {

            this.books = res;

            this.books.items.forEach(book => {
                if (book.volumeInfo.imageLinks === undefined)
                    book.volumeInfo.imageLinks = { smallThumbnail: 'assets/images/no_cover.jpg'}
            })


                if (event != null)
                event.target.complete();

        }
        ,
        error => {
            if (event != null)
                event.target.cancel();

            this.presentToast()
        });
    }

    async presentToast() {
        const toast = await this.toastController.create({
            message: 'Error loading content',
            duration: 2000
        });
        toast.present();
    }


}
