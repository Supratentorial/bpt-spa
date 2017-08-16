import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {TagManagerComponent} from './tag-manager/tag-manager.component';
import {TagSearchComponent} from './tag-search/tag-search.component';
import {InlineSVGModule} from 'ng-inline-svg';
import {TagService} from './tag.service';
import {CommonModule} from '@angular/common';
/**
 * Created by blake on 22/02/2017.
 */

@NgModule({
  declarations: [
    TagSearchComponent,
    TagManagerComponent
  ],
  imports: [
    HttpModule,
    CommonModule,
    InlineSVGModule
  ],
  providers: [TagService],
  exports: [TagSearchComponent, TagManagerComponent]
})
export class SharedModule {
}
