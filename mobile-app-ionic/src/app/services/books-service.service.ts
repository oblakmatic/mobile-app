import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';

import {Book, BookCollection} from '../models/models';
import {throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

    apiURL: string = 'https://www.googleapis.com/books/v1/volumes?q=fantasy&maxResults=8&country=SI';

    books: BookCollection;

    constructor(private httpClient: HttpClient) { }


    public getBooks(url?: string) {
        return this.httpClient.get(this.apiURL);

    }

    public getBookById(id: any) {

        return this.httpClient.get(
            'https://www.googleapis.com/books/v1/volumes/' + id);
    }

    public getBooksBySearch(isbn: string, author: string, title: string, keyword: string) {

        let defaultUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + keyword;

        if (isbn.length > 0)
            defaultUrl += '+isbn:' + isbn;

        if (author.length > 0)
            defaultUrl += '+inauthor:' + author;

        if (title.length > 0)
            defaultUrl += '+intitle:' + title;

        console.log(defaultUrl);


        return this.httpClient.get(defaultUrl);
    }

    public APICall() {

        let headerDict = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Authorization' : 'Basic ' + btoa('client-id')

        };

        let requestOptions = {
            headers: new HttpHeaders(headerDict)
        };

        return this.httpClient.get(
            'https://www.googleapis.com/books/v1/mylibrary/bookshelves/8/volumes', requestOptions)
            ;
    }
}
