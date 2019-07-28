import {Component, ElementRef, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {Book, BookCollection} from '../models/models';
import {BooksService} from '../services/books-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  id: any;
  read: boolean = false;
  book: Book;

  constructor(public navCtrl: NavController,
              private route: ActivatedRoute,
              private booksService: BooksService,
              private el: ElementRef) {}

  ngOnInit() {
      this.id = this.route.snapshot.params.id;


      this.booksService.getBookById(this.id).subscribe((res: Book) => {

          this.book = res;

          if (this.book.volumeInfo.description == null || this.book.volumeInfo.description.length < 2){
              this.read = true;
              this.book.volumeInfo.description = 'No description';
          }


      });
  }

    goBack(){
        this.navCtrl.pop();
    }

    readMore(){
      if(!this.read){
          this.el.nativeElement.querySelector('p.hide').classList.remove('hide');
          this.read = true;
      }

    }
}
