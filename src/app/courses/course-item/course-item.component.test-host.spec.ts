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
export class TestCourseItemHostComponent {
  public course: Course = new BasicCourse({
    id: 1, name: "Test course", createionDate: new Date(2018, 1, 2),
    duration: 67, description: "Description"
  });
  public deletedCourse: Course;
  constructor() { }
  public removeCourse(course: Course) { this.deletedCourse = course; }
}

describe('CourseItemComponent', () => {
  let testHost: TestCourseItemHostComponent;
  let fixture: ComponentFixture<TestCourseItemHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseItemComponent, TestCourseItemHostComponent]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCourseItemHostComponent);
    testHost = fixture.componentInstance;
  });

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
    const expectedRemovedCourse: Course = new BasicCourse({
      id: 1, name: "Test course", createionDate: new Date(2018, 1, 2),
      duration: 67, description: "Description"
    });

    const debugElement: DebugElement = fixture.debugElement;
    const deleteButton: DebugElement = debugElement.query(By.css('.delete-btn'));

    expect(deleteButton).toBeTruthy();

    deleteButton.triggerEventHandler('click', null);

    expect(testHost.deletedCourse).toBe(expectedRemovedCourse);
  });

});
