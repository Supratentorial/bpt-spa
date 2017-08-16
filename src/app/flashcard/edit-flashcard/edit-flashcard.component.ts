import {Component, OnInit} from '@angular/core';
import {FlashcardService} from '../flashcard.service';
import {Flashcard} from '../flashcard';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-flashcard',
  templateUrl: 'edit-flashcard.component.html',
  styleUrls: ['edit-flashcard.component.scss']
})
export class EditFlashcardComponent implements OnInit {

  currentFlashcard: Flashcard = {
    id: 0,
    question: ''
  };

  constructor(private location: Location, private flashcardService: FlashcardService) {
  }

  ngOnInit() {
  }

  navigateBack() {
    this.location.back();
  }


  saveFlashcard() {
    console.log('save flashcard button pressed');
    this.flashcardService.saveFlashcard(this.currentFlashcard).subscribe(
      flashcard => {
        this.currentFlashcard = flashcard;
      });
  }

}
