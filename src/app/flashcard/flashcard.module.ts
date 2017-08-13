/**
 * Created by blake on 20/03/2017.
 */

import {NgModule} from "@angular/core";
import {ListFlashcardsComponent} from "./list-flashcards/list-flashcards.component";
import {EditFlashcardComponent} from "./edit-flashcard/edit-flashcard.component";
import {CommonModule} from "@angular/common";
import {FlashcardService} from "./flashcard.service";
import {InlineSVGModule} from "ng-inline-svg";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InlineSVGModule,
    RouterModule],
  declarations: [
    ListFlashcardsComponent,
    EditFlashcardComponent],
  providers: [FlashcardService]
})
export class FlashcardModule {
}
