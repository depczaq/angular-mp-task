import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { FormsModule } from '@angular/forms';
import { Course } from '../course.model';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
  let course: Course;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CourseItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;

    course = { id: 1, title: "Test course", duration: 32, creationDate: new Date(2018, 1, 2), description: "Description" };
    component.courseItem = course;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('delete button should delete course', () => {
    const debugElemeng: DebugElement = fixture.debugElement;
    const deleteButton: DebugElement = debugElemeng.query(By.css('.delete-btn'));

    expect(deleteButton).toBeTruthy();

    let deletedCourse: Course;
    component.courseDeleted.subscribe((selected: Course) => deletedCourse = selected);
    deleteButton.triggerEventHandler('click', null);

    expect(deletedCourse).toBe(course);
  })
});
