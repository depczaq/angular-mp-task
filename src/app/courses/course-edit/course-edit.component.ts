import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'app/courses/course.model';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent {

  @Input() editedCourse: Course;

  constructor() { }

  public saveClicked(): void {
    console.log(`Saved course: ${this.editedCourse.title}`);
  }

  public cancelClicked(): void {
    console.log(`Cancel`);
  }
}
