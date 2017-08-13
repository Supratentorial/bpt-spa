import {Component, OnInit} from '@angular/core';
import {MultipleChoiceQuestion} from "../models/multiple-choice-question";
import {McqService} from "../mcq.service";
import {McqOption} from "../models/mcq-option";
import {Location} from "@angular/common";

@Component({
  selector: 'app-edit-mcq',
  templateUrl: 'edit-mcq.component.html',
  styleUrls: ['edit-mcq.component.scss']
})
export class EditMcqComponent implements OnInit {

  title: string = "";

  currentMcq: MultipleChoiceQuestion = {
    id: 0,
    question: "",
    options: []
  };

  constructor(private mcqService: McqService, private location: Location) {
  }

  ngOnInit() {
    let id: number;

    this.title = "Add Multiple Choice Question";
    this.createMcqOptions();
  }

  createMcqOptions() {
    for (let i = 0; i < 4; i++) {
      let option: McqOption = {
        id: 0,
        text: "",
        isCorrect: i === 1
      };
      this.currentMcq.options.push(option);
    }
  }

  navigateBack() {
    this.location.back();
  }

  saveNewMcq() {
    console.log('save mcq button pressed');
    this.mcqService.saveMcq(this.currentMcq).subscribe(mcq => this.currentMcq = mcq);
  }

}
