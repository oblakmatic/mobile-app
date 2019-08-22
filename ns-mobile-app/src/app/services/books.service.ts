import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';

import {Book, BookCollection} from '../models';
import {UserService} from './user.service';
import {forkJoin} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class BooksService {

    apiURL: string = 'https://www.googleapis.com/books/v1/volumes?q=fantasy&maxResults=8&country=SI';

    books: BookCollection;

    constructor(private httpClient: HttpClient, private userService: UserService) { }


    public getBooks(url?: string) {
        /*
                let headerDict = {
                    'Authorization' : 'Bearer ' + this.userService.userToken
                };

                let requestOptions = {
                    headers: new HttpHeaders(headerDict)
                };
        */
        return this.httpClient.get(this.apiURL);

    }

    public getBookById(id: any) {

        return this.httpClient.get('https://www.googleapis.com/books/v1/volumes/' + id);

    }

    public getBookmarkedBooks() {
        let headerDict = {
            'Authorization' : 'Bearer ' + this.userService.userToken
        };

        let requestOptions = {
            headers: new HttpHeaders(headerDict)
        };

        return this.httpClient.get('https://www.googleapis.com/books/v1/mylibrary/bookshelves/0/volumes', requestOptions);

    }


    public isBookAdded(isbn: any) {

        let headerDict = {
            'Authorization' : 'Bearer ' + this.userService.userToken
        };

        let requestOptions = {
            headers: new HttpHeaders(headerDict)
        };

        return this.httpClient.get('https://www.googleapis.com/books/v1/mylibrary/bookshelves/0/volumes?q=+isbn=' + isbn, requestOptions);
    }

    public addBook(id: any) {

        let headerDict = {
            'Authorization' : 'Bearer ' + this.userService.userToken
        };

        let requestOptions = {
            headers: new HttpHeaders(headerDict)
        };

        return this.httpClient.post('https://www.googleapis.com/books/v1/mylibrary/bookshelves/0/addVolume?volumeId=' + id, null, requestOptions);
    }

    public removeBook(id: any) {

        let headerDict = {
            'Authorization' : 'Bearer ' + this.userService.userToken
        };

        let requestOptions = {
            headers: new HttpHeaders(headerDict)
        };

        return this.httpClient.post('https://www.googleapis.com/books/v1/mylibrary/bookshelves/0/removeVolume?volumeId=' + id, null, requestOptions);
    }


    public getBooksBySearch(isbn: string, author: string, title: string, keyword: string) {

        let defaultUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + keyword;

        if (isbn.length > 0)
            defaultUrl += '+isbn:' + isbn;

        if (author.length > 0)
            defaultUrl += '+inauthor:' + author;

        if (title.length > 0)
            defaultUrl += '+intitle:' + title;



        return this.httpClient.get(defaultUrl);
    }

    public APICall() {

        let headerDict = {
            'Authorization' : 'Bearer ' + this.userService.userToken
        };

        let requestOptions = {
            headers: new HttpHeaders(headerDict)
        };


    }
}
