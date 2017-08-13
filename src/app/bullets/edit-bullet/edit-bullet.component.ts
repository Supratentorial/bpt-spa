import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {BulletService} from '../bullet.service';
import {Bullet} from '../models/Bullet';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-bullet',
  templateUrl: './edit-bullet.component.html',
  styleUrls: ['./edit-bullet.component.scss']
})
export class EditBulletComponent implements OnInit {

  private currentBullet: Bullet = {
    text: '',
    id: 0,
    downvotes: 0,
    upvotes: 0,
    status: 'active'
  };

  private currentBulletPageId : number;

  private currentRouteSub: any;

  constructor(private location: Location, private activatedRoute: ActivatedRoute, private bulletService: BulletService) {
  }

  ngOnInit() {
    this.currentRouteSub = this.activatedRoute.params.subscribe(params => {
      let currentBulletId: number = +params['bulletId'];
      this.currentBulletPageId = +params['bulletPageId'];
      if (currentBulletId != 0) {
        this.bulletService.getBulletById(currentBulletId).subscribe((bullet) => this.currentBullet = bullet);
      }
    });
  }


  navigateBack() {
    this.location.back();
  }

  saveBullet() {
    console.log('save bullet called');
    this.bulletService.saveBullet(this.currentBullet, this.currentBulletPageId).subscribe(
      (bullet) => {
        this.location.back();
      }
    );
  }
}
