import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CoursesToolbarComponent } from 'app/courses/courses-toolbar/courses-toolbar.component';

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
