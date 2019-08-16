import {Component, Input, OnInit} from '@angular/core';
import {BookCollection} from '../../models/models';
import {NgwWowService} from 'ngx-wow';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

    @Input()
    books: BookCollection = {};

    @Input()
    tabName: string;

  constructor(private wowService: NgwWowService, private navCtrl: NavController) {
      this.wowService.init();
  }

  ngOnInit() {
  }


    public openDetails(id){

        this.navCtrl.navigateForward(`/detail/${id}`);
    }




}
