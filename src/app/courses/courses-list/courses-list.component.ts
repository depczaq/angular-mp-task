import { Component, OnInit, OnChanges, DoCheck, OnDestroy, SimpleChanges } from '@angular/core';
import { Course } from '../course.model';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  public coursesList: Course[];

  constructor(private coursesService: CoursesService) {
    this.coursesList = [];
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("LIFECYCLE ngOnChanges: " + changes.previousValue + "->" + changes.currentValue);
  }

  ngOnInit() {
    console.log("LIFECYCLE ngOnInit");
    this.coursesList = this.coursesService.getCoursesList();
  }

  ngDoCheck(): void {
    console.log("LIFECYCLE ngDoCheck");
  }

  ngOnDestroy(): void {
    console.log("LIFECYCLE ngOnDestroy");
  }

  public removeFromList(course: Course) {
    console.log(course.id);
  }

  public loadMore() {
    console.log("Load more");
  }
}
