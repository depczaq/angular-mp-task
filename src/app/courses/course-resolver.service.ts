import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Course } from 'app/courses/course.model';
import { CoursesService } from 'app/courses/courses.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseResolver implements Resolve<Course> {

  constructor(private coursesService: CoursesService) { }

  public resolve(route: ActivatedRouteSnapshot): Observable<Course> {
    const { id: courseId } = route.params;

    console.log("I'm inside resolver!!!!");

    if (!!courseId && isFinite(courseId)) {
      return this.coursesService.getById(+courseId);
    }

    return of(this.coursesService.create());
  }
}
