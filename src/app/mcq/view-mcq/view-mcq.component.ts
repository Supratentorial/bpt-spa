import {Component, OnInit, OnDestroy} from '@angular/core';
import {MultipleChoiceQuestion} from "../models/multiple-choice-question";
import {McqService} from "../mcq.service";
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-view-mcq',
  templateUrl: 'view-mcq.component.html',
  styleUrls: ['view-mcq.component.scss']
})
export class ViewMcqComponent implements OnInit, OnDestroy {

  currentMcq: MultipleChoiceQuestion;

  constructor(private mcqService: McqService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.mcqService.getMcqById(params['id']))
      .subscribe((mcq: MultipleChoiceQuestion) => this.currentMcq = mcq);
  }

  ngOnDestroy(): void {

  }
}
