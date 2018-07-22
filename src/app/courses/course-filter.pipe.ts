import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'app/courses/course.model';

@Pipe({
  name: 'courseFilter'
})
export class CoursesFilterPipe implements PipeTransform {

  transform(courses: Course[], searchQuery: string) {
    return courses.filter(course => (
      course.title.includes(searchQuery)
      || course.description.includes(searchQuery)
    ));
  }
}
