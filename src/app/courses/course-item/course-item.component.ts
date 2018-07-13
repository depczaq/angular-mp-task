import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'app/courses/course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() public courseItem: Course;
  @Output() public courseDeleted: EventEmitter<Course> = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
  }

  public deleteCourse() {
    this.courseDeleted.emit(this.courseItem);
  }

}
