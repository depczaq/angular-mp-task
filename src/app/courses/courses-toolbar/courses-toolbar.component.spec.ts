import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesToolbarComponent } from './courses-toolbar.component';

describe('CoursesToolbarComponent', () => {
  let component: CoursesToolbarComponent;
  let fixture: ComponentFixture<CoursesToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
