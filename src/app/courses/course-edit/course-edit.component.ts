import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'app/courses/course.model';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent {
  @Input() editedCourse: Course;
  @Output() saveCourse: EventEmitter<Course> = new EventEmitter<Course>();

  constructor() { }

  public saveClicked(): void {
    this.saveCourse.emit(this.editedCourse);
  }

  public cancelClicked(): void {
    console.log(`Cancel`);
  }
}
