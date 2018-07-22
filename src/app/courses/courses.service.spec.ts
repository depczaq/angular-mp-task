import { BasicCourse } from './basic-course.model';
import { inject, TestBed } from '@angular/core/testing';
import { CoursesService } from 'app/courses/courses.service';

const existingCourseId = 1;
const notExistingCourseId = 99999;

fdescribe('CoursesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesService]
    });
  });

  it('should be created', inject([CoursesService], (service: CoursesService) => {
    expect(service).toBeTruthy();
  }));

  describe('getList function', () => {

    it('should return courses list', inject([CoursesService], (service: CoursesService) => {
      expect(service).toBeTruthy();

      const coursesList = service.getList();

      expect(coursesList).toBeTruthy();
    }));

    it('should return courses list with 8 elements', inject([CoursesService], (service: CoursesService) => {
      expect(service).toBeTruthy();

      const coursesList = service.getList();

      expect(coursesList.length).toBe(8);
    }));

    it('should return courses list copy', inject([CoursesService], (service: CoursesService) => {
      expect(service).toBeTruthy();

      let coursesList = service.getList();
      const originalLenght = service.getList().length;
      coursesList.pop();

      coursesList = service.getList();
      expect(coursesList.length).toBe(originalLenght);
    }));

    it('should return courses deep list copy', inject([CoursesService], (service: CoursesService) => {
      expect(service).toBeTruthy();

      let course = service.getList()[0];
      const originalTitle = course.title;
      course.title = 'changed title';

      course = service.getList()[0];
      expect(course.title).toBe(originalTitle);
    }));

  });

  describe('function create', () => {

    it('should add new element', inject([CoursesService], (service: CoursesService) => {
      expect(service).toBeTruthy();

      const coursesListLength = service.getList().length;

      service.create('new course', 10, new Date(2018, 6, 10), 'description', false);

      const coursesList = service.getList();
      expect(coursesList.length).toBe(coursesListLength + 1);
    }));

    it('should add new element with correct id and title', inject([CoursesService], (service: CoursesService) => {
      expect(service).toBeTruthy();

      const coursesListLength = service.getList().length;

      const newCourseTitle = 'new course';
      service.create(newCourseTitle, 10, new Date(2018, 6, 10), 'description', false);
      const newCourse = service.getList().pop();

      expect(newCourse.id).toBe(coursesListLength + 1);
      expect(newCourse.title).toBe(newCourseTitle);
    }));

  });

  describe('function getById', () => {

    it('should return requested course', inject([CoursesService], (service: CoursesService) => {
      expect(service).toBeTruthy();

      const testId = existingCourseId;
      const foundCourse = service.getById(testId);

      expect(foundCourse).toBeTruthy();
      expect(foundCourse.id).toBe(testId);
    }));

    it('should return course object copy', inject([CoursesService], (service: CoursesService) => {
      expect(service).toBeTruthy();

      const testId = existingCourseId;
      let course = service.getById(testId);
      const orginalTitle = course.title;

      course.title = 'changed title';
      course = service.getById(testId);
      expect(course.title).toBe(orginalTitle);
    }));

    it('should return undefined for not existing id', inject([CoursesService], (service: CoursesService) => {
      expect(service).toBeTruthy();

      const course = service.getById(notExistingCourseId);

      expect(course).toBeUndefined();
    }));
  });

  describe('function update', () => {

    it('should update course properties', inject([CoursesService], (service: CoursesService) => {
      expect(service).toBeTruthy();

      const testId = existingCourseId;
      const updatedTitle = 'updated title';

      const course = service.getById(testId);
      course.title = updatedTitle;
      service.update(course);

      const updatedCourse = service.getById(testId);
      expect(updatedCourse.title).toBe(updatedTitle);
    }));

    it('should return course object copy', inject([CoursesService], (service: CoursesService) => {
      expect(service).toBeTruthy();

      const testId = existingCourseId;
      let course = service.getById(testId);
      const orginalTitle = course.title;

      course = service.update(course);
      course.title = 'changed title';

      const updatedCourse = service.getById(testId);
      expect(updatedCourse.title).toBe(orginalTitle);
    }));

    it('should return undefined for course with not existiong id', inject([CoursesService], (service: CoursesService) => {
      expect(service).toBeTruthy();

      const course = new BasicCourse({
        id: notExistingCourseId,
        title: "test",
        creationDate: null,
        duration: 0,
        description: "",
        topRated: false
      });

      const updatedCourse = service.update(course);
      expect(updatedCourse).toBeUndefined();
    }));

  });

  describe('function remove', () => {

    it('should remove course with given id', inject([CoursesService], (service: CoursesService) => {
      expect(service).toBeTruthy();

      const testId = existingCourseId;

      const course = service.getById(testId);
      expect(course).toBeTruthy();

      const result: boolean = service.remove(testId);
      expect(result).toBe(true);

      const deletedCourse = service.getById(testId);
      expect(deletedCourse).toBeUndefined();
    }));

    it('should return false for course with not existing id', inject([CoursesService], (service: CoursesService) => {
      expect(service).toBeTruthy();

      const testId = notExistingCourseId;

      const course = service.getById(testId);
      expect(course).toBeUndefined();

      const result: boolean = service.remove(testId);
      expect(result).toBe(false);
    }));

  });

});
