import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseDurationPipe } from 'app/courses/course-duration.pipe';
import { CourseEditComponent } from 'app/courses/course-edit/course-edit.component';
import { CoursesFilterPipe } from 'app/courses/course-filter.pipe';
import { CourseHighlightDirective } from 'app/courses/course-highlight.directive';
import { CourseItemComponent } from 'app/courses/course-item/course-item.component';
import { CoursesListComponent } from 'app/courses/courses-list/courses-list.component';
import { CoursesSortByTimePipe } from 'app/courses/courses-sort-by-time.pipe';
import { CoursesToolbarComponent } from 'app/courses/courses-toolbar/courses-toolbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    CoursesListComponent,
    CoursesToolbarComponent,
    CourseItemComponent,
    CourseDurationPipe,
    CoursesFilterPipe,
    CourseHighlightDirective,
    CoursesSortByTimePipe,
    CourseEditComponent
  ],
  exports: [
    CoursesListComponent
  ],
  providers: [
    CoursesFilterPipe
  ]
})
export class CoursesModule { }
