import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesListComponent } from './courses-list.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { CoursesService } from '../courses.service';
import { By } from '@angular/platform-browser';
import { CourseItemComponent } from '../course-item/course-item.component';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  let coursesService: Partial<CoursesService>
  let consoleMock: Partial<Console>;

  beforeEach(async(() => {
    coursesService = new CoursesService();

    TestBed.configureTestingModule({
      declarations: [CoursesListComponent, CourseItemComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: CoursesService, useValue: coursesService }]
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
  });

  it('should display list of courses', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const items: NodeListOf<HTMLElement> = nativeElement.querySelectorAll('app-course-item');

    expect(items).toBeTruthy();
    expect(items.length).toBe(component.coursesList.length);
  });

  it('delete buttons should be displayed', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const deleteButtons: DebugElement[] = debugElement.queryAll(By.css('.delete-btn'));

    expect(deleteButtons).toBeTruthy();
    expect(deleteButtons.length).toBe(component.coursesList.length);
  });

  it('delete button click should delete video course items', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const deleteButtons: DebugElement[] = debugElement.queryAll(By.css('.delete-btn'));

    expect(deleteButtons).toBeTruthy();

    spyOn(component, 'removeFromList');

    deleteButtons
      .forEach(button => button.triggerEventHandler('click', null))
    
    expect(component.removeFromList).toHaveBeenCalledTimes(deleteButtons.length);
  });

  it('load more button should be displayed', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const loadMoreButton: DebugElement = debugElement.query(By.css('.load-more .btn'));

    expect(loadMoreButton).toBeTruthy;
  });

  it('load more click should call load more method', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const loadMoreButton: DebugElement = debugElement.query(By.css('.load-more .btn'));

    expect(loadMoreButton).toBeTruthy;

    spyOn(component, 'loadMore');
    loadMoreButton.triggerEventHandler('click',null);
    expect(component.loadMore).toHaveBeenCalled();
  });
});
