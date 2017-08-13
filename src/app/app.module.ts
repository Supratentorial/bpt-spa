import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "./shared/shared.module";
import {HomeComponent} from "./home/home.component";
import {SearchExistingMcqsComponent} from './mcq/search-existing-mcqs/search-existing-mcqs.component';
import {EditTagComponent} from "./shared/edit-tag/edit-tag.component";
import {BulletsModule} from "./bullets/bullets.module";
import {FlashcardModule} from "./flashcard/flashcard.module";
import {McqModule} from "./mcq/mcq.module";
import {SettingsModule} from "./settings/settings.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchExistingMcqsComponent,
    EditTagComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    McqModule,
    FlashcardModule,
    BulletsModule,
    SettingsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
