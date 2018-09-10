import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'app/courses/course.model';
import { CoursesService } from 'app/courses/courses.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  public course: Course;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const courseId: number = params['id'];
      if (courseId) {
        this.course = this.coursesService.getById(+courseId);
      } else {
        this.course = this.coursesService.create();
      }
    });
  }

  public saveClicked(): void {
    if (this.course.id) {
      this.coursesService.update(this.course);
    } else {
      this.coursesService.addNew(
        this.course.title,
        this.course.duration,
        this.course.creationDate,
        this.course.description,
        this.course.topRated);
    }
    this.router.navigate(['/courses']);
  }

  public cancelClicked(): void {
    this.router.navigate(['/courses']);
  }
}
