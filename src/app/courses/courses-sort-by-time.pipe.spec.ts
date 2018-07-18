import { CoursesSortByTimePipe } from 'app/courses/courses-sort-by-time.pipe';

describe('CourseSortPipe', () => {
  it('create an instance', () => {
    const pipe = new CoursesSortByTimePipe();
    expect(pipe).toBeTruthy();
  });
});
