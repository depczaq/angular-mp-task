





import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BasicCourse } from 'app/courses/basic-course.model';
import { CourseItemComponent } from 'app/courses/course-item/course-item.component';
import { Course } from 'app/courses/course.model';
@Component({
  template:
    `<app-course-item 
      [courseItem]="courseItem"
      (courseDeleted)="removeCourse($event)">
    </app-course-item>`
})
export class TestCourseItemComponentHost {
  public course: Course = new BasicCourse(1, "Test course", new Date(2018, 1, 2), 67, "Description");
  public deletedCourse: Course;
  constructor() { };
  public removeCourse(course: Course) { this.deletedCourse = course };
}

describe('CourseItemComponent', () => {
  let testHost: TestCourseItemComponentHost;
  let fixture: ComponentFixture<TestCourseItemComponentHost>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseItemComponent, TestCourseItemComponentHost]
    });
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCourseItemComponentHost);
    testHost = fixture.componentInstance;
  })

  it('delete button should invoke removeCourse method', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const deleteButton: HTMLElement = nativeElement.querySelector('.delete-btn');
    fixture.detectChanges();

    expect(deleteButton).toBeTruthy();

    spyOn(testHost, 'removeCourse');
    deleteButton.click();

    expect(testHost.removeCourse).toHaveBeenCalled();
  });

  it('delete button should remove course', () => {
    fixture.detectChanges();
    const expectedRemovedCourse: Course = new BasicCourse(1, "Test course", new Date(2018, 1, 2), 67, "Description");

    const debugElement: DebugElement = fixture.debugElement;
    const deleteButton: DebugElement = debugElement.query(By.css('.delete-btn'));

    expect(deleteButton).toBeTruthy();

    deleteButton.triggerEventHandler('click', null);

    expect(testHost.deletedCourse).toBe(expectedRemovedCourse);
  });

});