import {Component, OnInit} from '@angular/core';
import {TagService} from '../tag.service';
import {Tag} from '../tag';

@Component({
  selector: 'app-tag-search',
  templateUrl: 'tag-search.component.html',
  styleUrls: ['tag-search.component.scss']
})
export class TagSearchComponent implements OnInit {

  tags: Array<Tag> = [];

  constructor(private tagService: TagService) {
  }

  ngOnInit() {
    this.tagService.getTags().subscribe(tags => {
      this.tags = tags;
    });

  }

}
