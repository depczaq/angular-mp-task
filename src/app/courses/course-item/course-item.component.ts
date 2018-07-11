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

  @Input() public freshCourse: boolean;
  @Input() public upcomingCourse: boolean;

  // TWO_WEEKS = 1000 millisecons * 60 seconds * 60 minutes * 24 hours * 14 days
  private readonly TWO_WEEKS: number = 1000 * 60 * 60 * 24 * 14;

  constructor() { }

  ngOnInit() {
    let now: number = Date.now();
    let courseAge = now - this.courseItem.creationDate.getTime();
    this.freshCourse = courseAge >= 0 && courseAge <= this.TWO_WEEKS;
    this.upcomingCourse = courseAge < 0;
  }

  public deleteCourse() {
    this.courseDeleted.emit(this.courseItem);
  }

}
