import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesToolbarComponent } from './courses-toolbar.component';
import { FormsModule } from '@angular/forms';

describe('CoursesToolbarComponent', () => {
  let component: CoursesToolbarComponent;
  let fixture: ComponentFixture<CoursesToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ CoursesToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
