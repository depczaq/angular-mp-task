import { Course } from './course.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class CoursesSortPipe implements PipeTransform {

  transform(courses: Course[]): any {
    return courses.sort((c1, c2) => c2.creationDate.getTime() - c1.creationDate.getTime());
  }

}
