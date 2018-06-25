import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  public coursesList: Course[] = [];

  constructor(coursesService: CoursesService) {
    this.coursesList = coursesService.getCoursesList();
  }

  ngOnInit() {
  }

}
