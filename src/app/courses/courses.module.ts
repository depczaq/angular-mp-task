import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesToolbarComponent } from './courses-toolbar/courses-toolbar.component';
import { CourseItemComponent } from './course-item/course-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoursesListComponent, CoursesToolbarComponent, CourseItemComponent],
  exports: [
    CoursesListComponent
  ]
})
export class CoursesModule { }
