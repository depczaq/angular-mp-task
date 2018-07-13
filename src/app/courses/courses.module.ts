import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoursesFilterPipe } from 'app/courses/course-filter.pipe';
import { CourseHighlightDirective } from 'app/courses/course-highlight.directive';
import { CourseItemComponent } from 'app/courses/course-item/course-item.component';
import { CoursesListComponent } from 'app/courses/courses-list/courses-list.component';
import { CoursesSortPipe } from 'app/courses/courses-sort.pipe';
import { CoursesToolbarComponent } from 'app/courses/courses-toolbar/courses-toolbar.component';
import { DurationPipe } from 'app/courses/duration.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CoursesListComponent,
    CoursesToolbarComponent,
    CourseItemComponent,
    DurationPipe,
    CoursesFilterPipe,
    CourseHighlightDirective,
    CoursesSortPipe
  ],
  exports: [
    CoursesListComponent
  ],
  providers: [
    CoursesFilterPipe
  ]
})
export class CoursesModule { }
