/**
 * Created by blake on 21/03/2017.
 */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EditMcqComponent} from './edit-mcq/edit-mcq.component';
import {ViewMcqComponent} from './view-mcq/view-mcq.component';
import {ListMcqsComponent} from './list-mcqs/list-mcqs.component';
import {SelectMcqTagsComponent} from './select-mcq-tags/select-mcq-tags.component';
import {McqService} from './mcq.service';
import {InlineSVGModule} from 'ng-inline-svg';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    InlineSVGModule,
    FormsModule,
    RouterModule,
    SharedModule],
  declarations: [
    EditMcqComponent,
    ViewMcqComponent,
    ListMcqsComponent,
    SelectMcqTagsComponent],
  providers: [McqService]
})

export class McqModule {
}
