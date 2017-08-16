import {Component, Input, OnInit} from '@angular/core';
import {BulletPage} from '../../bullets/models/bullet-page';

@Component({
  selector: 'app-bullet-page',
  templateUrl: './bullet-page.component.html',
  styleUrls: ['./bullet-page.component.scss']
})
export class BulletPageComponent implements OnInit {

  @Input()
  bulletPage: BulletPage;

  constructor() {
  }

  ngOnInit() {
  }

  onBulletPageSelected(){

  }
}
