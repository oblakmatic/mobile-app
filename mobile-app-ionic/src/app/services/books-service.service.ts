import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {Book, BookCollection} from '../models/models';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

    apiURL: string = 'https://www.googleapis.com/books/v1/volumes?q=fantasy&maxResults=8&country=SI';

    books: BookCollection;

    constructor(private httpClient: HttpClient) { }


    public getBooks(url?: string): Observable {

        return this.httpClient.get(this.apiURL);


    }

}
