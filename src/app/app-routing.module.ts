import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {EditMcqComponent} from "./mcq/edit-mcq/edit-mcq.component";
import {ViewMcqComponent} from "./mcq/view-mcq/view-mcq.component";
import {ListMcqsComponent} from "./mcq/list-mcqs/list-mcqs.component";
import {HomeComponent} from "./home/home.component";
import {ListFlashcardsComponent} from "./flashcard/list-flashcards/list-flashcards.component";
import {SelectMcqTagsComponent} from "./mcq/select-mcq-tags/select-mcq-tags.component";
import {EditFlashcardComponent} from "./flashcard/edit-flashcard/edit-flashcard.component";
import {ListBulletPagesComponent} from "./bullets/list-bullet-pages/list-bullet-pages.component";
import {ViewBulletPageComponent} from "./bullets/view-bullet-page/view-bullet-page.component";
import {EditBulletPageComponent} from "./bullets/edit-bullet-page/edit-bullet-page.component";
import {EditBulletComponent} from "./bullets/edit-bullet/edit-bullet.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mcqs', component: SelectMcqTagsComponent},
  {path: 'mcqs/browse', component: ListMcqsComponent},
  {path: 'mcqs/:id', component: ViewMcqComponent},
  {path: 'mcqs/:id/edit', component: EditMcqComponent},
  {path: 'flashcards', component: ListFlashcardsComponent},
  {path: 'flashcards/:id/edit', component: EditFlashcardComponent},
  {path: 'bullets', component: ListBulletPagesComponent},
  {path: 'bullets/bullet-pages', component: ViewBulletPageComponent},
  {path: 'bullets/bullet-pages/:bulletPageId/edit', component: EditBulletPageComponent},
  {path: 'bullets/bullet-pages/:bulletPageId', component: ViewBulletPageComponent},
  {path: 'bullets/bullet-pages/:bulletPageId/bullet/:bulletId/edit', component: EditBulletComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
}
