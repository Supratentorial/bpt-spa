import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {BulletPage} from '../models/bullet-page';
import {ActivatedRoute} from '@angular/router';
import {BulletPageService} from '../../bullet-page/bullet-page.service';
import {BulletService} from '../bullet.service';
import {Bullet} from '../models/bullet';

@Component({
  selector: 'app-view-bullet-page',
  templateUrl: './view-bullet-page.component.html',
  styleUrls: ['./view-bullet-page.component.scss']
})
export class ViewBulletPageComponent implements OnInit {

  currentBulletPage: BulletPage;
  bullets: Bullet[];
  activatedRouteSub: any;
  constructor(private location: Location, private route: ActivatedRoute, private bulletPageService: BulletPageService,
              private bulletService: BulletService) {
  }

  ngOnInit() {
    let bulletPageId = 0;
    this.activatedRouteSub = this.route.params.subscribe((params) => {
        bulletPageId = params['bulletPageId'];
        this.bulletPageService.getBulletPageById(bulletPageId).subscribe(
          bulletPage => this.currentBulletPage = bulletPage
        );
        this.bulletService.getBulletsForPage(bulletPageId).subscribe(
          bullets => this.bullets = bullets
        )
      }
    );

  }

  navigateBack() {
    this.location.back();
  }

}
