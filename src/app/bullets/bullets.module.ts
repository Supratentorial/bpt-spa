/**
 * Created by blake on 21/03/2017.
 */
import {NgModule} from "@angular/core";
import {ListBulletsComponent} from "./list-bullets/list-bullets.component";
import {CommonModule} from "@angular/common";
import {InlineSVGModule} from "ng-inline-svg";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {ViewBulletPageComponent} from "./view-bullet-page/view-bullet-page.component";
import {EditBulletPageComponent} from "./edit-bullet-page/edit-bullet-page.component";
import {ListBulletPagesComponent} from "./list-bullet-pages/list-bullet-pages.component";
import {BulletPageService} from "./bullet-page.service";
import { EditBulletComponent } from './edit-bullet/edit-bullet.component';
import {BulletService} from './bullet.service';

@NgModule({
  imports: [
    CommonModule,
    InlineSVGModule,
    FormsModule,
    RouterModule],
  declarations: [
    ListBulletsComponent, ListBulletPagesComponent, ViewBulletPageComponent, EditBulletPageComponent, EditBulletComponent
  ],
  providers: [BulletPageService, BulletService]
})
export class BulletsModule {
}
