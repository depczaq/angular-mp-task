import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CoursesSearchEvent } from 'app/courses/courses-search-event.model';

@Component({
  selector: 'app-courses-toolbar',
  templateUrl: './courses-toolbar.component.html',
  styleUrls: ['./courses-toolbar.component.css']
})
export class CoursesToolbarComponent implements OnInit {

  @Output() public searchExecute = new EventEmitter<CoursesSearchEvent>();

  constructor() { }

  ngOnInit() {
  }

  public searchClicked(text: string) {
    console.log('Search for: ' + text);
    this.searchExecute.emit({ searchText: text });
  }
}
