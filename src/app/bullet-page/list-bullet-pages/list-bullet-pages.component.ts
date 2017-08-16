import {Component, OnInit} from '@angular/core';
import {BulletPage} from '../../bullets/models/bullet-page';
import {BulletPageService} from '../bullet-page.service';

@Component({
  selector: 'app-list-bullet-pages',
  templateUrl: './list-bullet-pages.component.html',
  styleUrls: ['./list-bullet-pages.component.scss']
})
export class ListBulletPagesComponent implements OnInit {

  bulletPages: Array<BulletPage> = [];

  constructor(private bulletPageService: BulletPageService) {
  }

  ngOnInit() {
    this.bulletPageService.getBulletPages().subscribe(
      bulletPages => this.bulletPages = bulletPages
    )
  }

}
