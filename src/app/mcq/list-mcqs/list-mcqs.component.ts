import { Component, OnInit } from '@angular/core';
import {McqService} from '../mcq.service';
import {MultipleChoiceQuestion} from '../models/multiple-choice-question';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-mcqs',
  templateUrl: 'list-mcqs.component.html',
  styleUrls: ['list-mcqs.component.scss']
})
export class ListMcqsComponent implements OnInit {

  mcqs: Array<MultipleChoiceQuestion> = [];

  constructor(private mcqService: McqService, private router: Router) { }

  ngOnInit() {
    this.mcqService.getMcqs().subscribe((mcqs: Array<MultipleChoiceQuestion>) => {
      this.mcqs = mcqs;
    });
  }

  viewSelectedMcq(mcq: MultipleChoiceQuestion) {
    this.mcqService.currentMcq = mcq;
    this.router.navigate(['mcqs/', mcq.id]);
  }

}
