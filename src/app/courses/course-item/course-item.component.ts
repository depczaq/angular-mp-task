import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() public courseItem: Course;

  constructor() { }

  ngOnInit() {
  }

}
