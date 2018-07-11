import { CoursesFilterPipe } from 'app/courses/course-filter.pipe';

describe('CourseFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new CoursesFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
