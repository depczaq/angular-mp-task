import { TestBed, inject } from '@angular/core/testing';

import { CourseResolver } from 'app/courses/course-resolver.service';

describe('CourseResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseResolver]
    });
  });

  it('should be created', inject([CourseResolver], (service: CourseResolver) => {
    expect(service).toBeTruthy();
  }));
});
