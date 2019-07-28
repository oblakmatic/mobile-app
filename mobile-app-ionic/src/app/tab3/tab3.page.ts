import {Component, ElementRef, Inject, OnInit} from '@angular/core';
import {BookCollection} from '../models/models';
import {BooksService} from '../services/books-service.service';
import {NavController} from '@ionic/angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

    books: BookCollection = {};

    searchForm: FormGroup;

    constructor(private booksService: BooksService,
                public navCtrl: NavController,
                private formBuilder: FormBuilder,
                private el: ElementRef) {}

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
        let warning = this.el.nativeElement.querySelector('p.warning');
        if (!warning.classList.contains('hide')) {
            warning.classList.add('hide');
        }

        let isbn = this.searchForm.value.isbn.toString();
        let author = this.searchForm.value.author.toString();
        let title = this.searchForm.value.title.toString();
        let keyword = this.searchForm.value.keyword.toString();

        if (isbn.length + author.length + title.length + keyword.length === 0 && warning.classList.contains('hide')){
            this.el.nativeElement.querySelector('p.hide').classList.remove('hide');
            return;
        }

        this.booksService.getBooksBySearch(isbn, author, title, keyword).subscribe(res=> {

            console.log(res);

            }
        );


    }



}
