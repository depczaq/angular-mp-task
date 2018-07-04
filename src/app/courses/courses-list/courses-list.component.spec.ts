import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { CoursesService } from '../courses.service';
import { By } from '@angular/platform-browser';

fdescribe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async(() => {
    let coursesService: CoursesService = new CoursesService();

    TestBed.configureTestingModule({
      declarations: [ CoursesListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{provide: CoursesService, useValue: coursesService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create coursesList on init', () => {
    expect(component.coursesList).toBeTruthy();
    expect(component.coursesList.length).toBe(8);
  })

  it('should display list of courses', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const items: NodeListOf<HTMLElement> = nativeElement.querySelectorAll('app-course-item');

    expect(items).toBeTruthy();
    expect(items.length).toBe(component.coursesList.length);
  })

  it('should delete video course item', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const deleteButton = debugElement.query(By.css('.delete-btn'));

    expect(deleteButton).toBeTruthy();
  })
});
