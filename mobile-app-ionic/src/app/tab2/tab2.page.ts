import { Component } from '@angular/core';
import {BooksService} from '../services/books-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

   myText: any;

  constructor(private booksService: BooksService) {}



  APICall() {

      this.booksService.APICall().subscribe(

          res => {

              this.myText = "YES";

            console.log(res)

          },

          err => {
              this.myText = "NO";

              console.log(err)
          },
      );
  }
}
