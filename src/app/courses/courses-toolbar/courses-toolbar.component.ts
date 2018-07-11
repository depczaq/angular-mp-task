import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-courses-toolbar',
  templateUrl: './courses-toolbar.component.html',
  styleUrls: ['./courses-toolbar.component.css']
})
export class CoursesToolbarComponent implements OnInit {

  @Output('searchExecuted') searchExecutedEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public runSearch(text: string) {
    console.log('Search for: ' + text);
    this.searchExecutedEventEmitter.emit(text);
  }
}
