import {Component, OnInit} from '@angular/core';

import { BooksService } from '../services/books-service.service';
import {BookCollection} from '../models/models';

import {NavController, ToastController} from '@ionic/angular';


@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

    books: BookCollection = {};

    constructor( private booksService: BooksService, private toastController: ToastController) {}

    ngOnInit(): void {
        this.loadContent();
    }


    doRefresh(event) {
        console.log('Begin async operation');

        this.loadContent(event);

    }

    loadContent(event = null) {
        this.booksService.getBooks().subscribe(res => {

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
            });

            if (event != null) {
                event.target.complete();
            }
        }
        ,
        error => {
            if (event != null) {
                event.target.complete();
            }

            this.presentToast();
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
