import {Component, ElementRef, OnInit} from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {Book, BookCollection} from '../models/models';
import {BooksService} from '../services/books-service.service';
import {__await} from 'tslib';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  id: any;
  read = false;
  bookmarked = false;
  book: Book;

  constructor(public navCtrl: NavController,
              private route: ActivatedRoute,
              private booksService: BooksService,
              private el: ElementRef,
              private alertController: AlertController) {}

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
        this.navCtrl.pop();
    }

    readMore(){
      if(!this.read){
          this.el.nativeElement.querySelector('p.hide').classList.remove('hide');
          this.read = true;
      }

    }

    addBookmarkButton(){
      __await(this.presentAlert('Add this book to your collection?'));
    }

    removeBookmarkButton(){
        __await(this.presentAlert('Remove this book from your collection?'));
    }

    async presentAlert(text: string) {
        const alert = await this.alertController.create({
            subHeader: text,
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: () => {
                        if (this.bookmarked)
                            this.booksService.removeBook(this.id).subscribe(res => this.bookmarked = false)
                        else
                            this.booksService.addBook(this.id).subscribe(res => this.bookmarked = true)
                    }
                }
            ]
        });

        await alert.present();
    }
}
