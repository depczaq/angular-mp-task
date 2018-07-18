import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CoursesFilterPipe } from 'app/courses/course-filter.pipe';
import { Course } from 'app/courses/course.model';
import { CoursesService } from 'app/courses/courses.service';
import { CoursesSearchEvent } from 'app/courses/courses-search-event.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  public allCoursesList: Course[];
  public coursesList: Course[];

  constructor(private coursesService: CoursesService,
    private searchFilterPipe: CoursesFilterPipe) {
    this.allCoursesList = [];
    this.coursesList = [];
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("LIFECYCLE ngOnChanges");
  }

  ngOnInit() {
    console.log("LIFECYCLE ngOnInit");
    this.allCoursesList = this.coursesService.getCoursesList();
    this.coursesList = this.allCoursesList;
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

  public filterResults(searchEvent: CoursesSearchEvent) {
    if (searchEvent.searchText) {
      this.coursesList = this.searchFilterPipe.transform(this.allCoursesList, searchEvent.searchText);
    } else {
      this.coursesList = this.allCoursesList;
    }
  }
}
