import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-courses-toolbar',
  templateUrl: './courses-toolbar.component.html',
  styleUrls: ['./courses-toolbar.component.css']
})
export class CoursesToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public runSearch(text: string) {
    console.log(text);
  }
}
