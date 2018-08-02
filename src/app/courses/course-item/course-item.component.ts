import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourseDeleteEvent } from 'app/courses/course-delete-event';
import { Course } from 'app/courses/course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() public courseItem: Course;
  @Output() public deleteCourse: EventEmitter<CourseDeleteEvent> = new EventEmitter<CourseDeleteEvent>();

  constructor() { }

  ngOnInit() {
  }

  public deleteClicked() {
    if (this.deleteConfirmation()) {
      this.deleteCourse.emit({ courseId: this.courseItem.id });
    }
  }

  private deleteConfirmation(): boolean {
    return confirm(`Are you sure you want to delete the course \'${this.courseItem.title}\'`);
  }
}
