import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {BulletPage} from '../../bullets/models/bullet-page';
import {BulletPageService} from '../bullet-page.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-edit-bullet-page',
  templateUrl: './edit-bullet-page.component.html',
  styleUrls: ['./edit-bullet-page.component.scss']
})
export class EditBulletPageComponent implements OnInit {
  title: string;
  activatedRouteSub: any;


  bulletPage: BulletPage = {
    id: 0,
    name: ''
  };

  constructor(private location: Location, private bulletPageService: BulletPageService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRouteSub = this.route.params.subscribe(params => {
      const bulletPageId = +params['bulletPageId'];
      if (bulletPageId === 0) {
        this.title = 'Add Bullet Page';
      } else {
        this.bulletPageService.getBulletPageById(bulletPageId).subscribe(
          bulletPage => this.bulletPage = bulletPage
        );
        this.title = 'Edit Bullet Page';
      }
      console.log(this.title);
    });
  }

  navigateBack() {
    this.location.back();
  }

  saveBulletPage() {
    this.bulletPageService.saveBulletPage(this.bulletPage).subscribe(
      bulletPage => {
        this.bulletPage = bulletPage;
        this.location.back();
      }
    );
  }
}
