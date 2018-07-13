import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseItemComponent } from 'app/courses/course-item/course-item.component';
import { CoursesListComponent } from 'app/courses/courses-list/courses-list.component';
import { CoursesToolbarComponent } from 'app/courses/courses-toolbar/courses-toolbar.component';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [CoursesListComponent, CoursesToolbarComponent, CourseItemComponent],
  exports: [
    CoursesListComponent
  ]
})
export class CoursesModule { }
