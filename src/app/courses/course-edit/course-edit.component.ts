import { Component, OnInit } from '@angular/core';
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
    this.route.data.subscribe(
      (data: { course: Course }) => {
        this.course = data.course;
      },
      (error) => {
        console.log(error);
      });
  }

  public saveClicked(): void {
    if (this.course.id) {
      this.coursesService.update(this.course).subscribe(
        (updatedCourse) => {
          console.log("Updated course: " + updatedCourse);
          this.navigateToList();
        },
        (error) => console.log(error)
      );
    } else {
      this.coursesService.addNew(
        this.course.title,
        this.course.duration,
        this.course.creationDate,
        this.course.description,
        this.course.topRated).subscribe(
          (addedCourse) => {
            console.log("Added course: " + addedCourse);
            this.navigateToList();
          },
          (error) => console.log(error)
        );
    }
  }

  private navigateToList() {
    this.router.navigate(['/courses']);
  }

  public cancelClicked(): void {
    this.router.navigate(['/courses']);
  }
}
