import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'app/courses/course.model';

@Pipe({
  name: 'orderBy'
})
export class CoursesSortPipe implements PipeTransform {

  transform(courses: Course[]): any {
    return courses.sort((c1, c2) => c2.creationDate.getTime() - c1.creationDate.getTime());
  }

}
