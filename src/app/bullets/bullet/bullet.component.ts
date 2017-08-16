import {Component, Input, OnInit} from '@angular/core';
import {Bullet} from '../models/bullet';

@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html',
  styleUrls: ['./bullet.component.scss']
})
export class BulletComponent implements OnInit {

  @Input()
  bullet: Bullet;

  constructor() {
  }

  ngOnInit() {
  }

}
