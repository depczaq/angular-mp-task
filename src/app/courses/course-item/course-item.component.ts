import { Course } from 'app/courses/course.model';
import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, } from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent {
  @Input() public courseItem: Course;

  @Output() public deleteCourse: EventEmitter<Course> = new EventEmitter<Course>();
  @Output() public editCourse: EventEmitter<Course> = new EventEmitter<Course>();

  constructor() { }

  public editClicked() {
    this.editCourse.emit(this.courseItem);
  }

  public deleteClicked() {
    this.deleteCourse.emit(this.courseItem);
  }
}
