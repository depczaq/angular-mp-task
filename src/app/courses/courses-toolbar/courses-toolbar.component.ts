import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CoursesSearchEvent } from 'app/courses/courses-search-event.model';

@Component({
  selector: 'app-courses-toolbar',
  templateUrl: './courses-toolbar.component.html',
  styleUrls: ['./courses-toolbar.component.css']
})
export class CoursesToolbarComponent implements OnInit {

  @Output() public searchExecute = new EventEmitter<CoursesSearchEvent>();
  @Output() public addNewExecute = new EventEmitter<any>();

  public searchText: string;

  constructor() { }

  ngOnInit() {
  }

  public searchClicked(text: string): void {
    console.log('Search for: ' + text);
    this.searchExecute.emit({ searchText: text });
  }

  public addNewClicked() {
    this.addNewExecute.emit();
  }
}
