import {Component, ElementRef, Inject, OnInit} from '@angular/core';
import {BookCollection} from '../models/models';
import {BooksService} from '../services/books-service.service';
import {AlertController, NavController} from '@ionic/angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {__await} from 'tslib';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

    books: BookCollection = {};

    searchForm: FormGroup;

    searchClosed = false;

    constructor(private booksService: BooksService,
                public navCtrl: NavController,
                private formBuilder: FormBuilder,
                private el: ElementRef,
                private alertController: AlertController) {}

    ngOnInit(): void {
        this.searchForm = this.formBuilder.group({
            isbn: new FormControl('',  Validators.compose([
                Validators.maxLength(13)
            ])),
            author: new FormControl(''),
            title: new FormControl(''),
            keyword: new FormControl('')
        });
    }

    onSearchButton() {

        if (this.searchClosed) {
            this.searchClosed = false;
            return;
        }

        let isbn = this.searchForm.value.isbn.toString();
        let author = this.searchForm.value.author.toString();
        let title = this.searchForm.value.title.toString();
        let keyword = this.searchForm.value.keyword.toString();

        if (isbn.length + author.length + title.length + keyword.length === 0){
            __await(this.presentAlert());
            return;
        }

        this.booksService.getBooksBySearch(isbn, author, title, keyword).subscribe(res => {

            this.books = res;
            this.searchClosed = true;
            this.books.items.forEach(book => {
                if (book.volumeInfo.imageLinks === undefined)
                    book.volumeInfo.imageLinks = { smallThumbnail: 'assets/images/no_cover.jpg'}
            })

            }
        );


    }

    async presentAlert() {
        const alert = await this.alertController.create({
            message: 'Please fill out at least one field',
            buttons: ['OK']
        });

        await alert.present();
    }



}
