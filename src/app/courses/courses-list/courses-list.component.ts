import { CourseDeleteEvent } from '../course-delete-event';
import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CoursesFilterPipe } from 'app/courses/course-filter.pipe';
import { Course } from 'app/courses/course.model';
import { CoursesSearchEvent } from 'app/courses/courses-search-event.model';
import { CoursesService } from 'app/courses/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  public coursesList: Course[];
  private searchFilter = '';

  constructor(private coursesService: CoursesService,
    private searchFilterPipe: CoursesFilterPipe) {
    this.coursesList = [];
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("LIFECYCLE ngOnChanges");
  }

  ngOnInit() {
    console.log("LIFECYCLE ngOnInit");
    this.reloadList();
  }

  ngDoCheck(): void {
    console.log("LIFECYCLE ngDoCheck");
  }

  ngOnDestroy(): void {
    console.log("LIFECYCLE ngOnDestroy");
  }

  public removeCourse(event: CourseDeleteEvent) {
    this.coursesService.remove(event.courseId);
    this.reloadList();
  }

  public loadMore() {
    console.log("Load more");
  }

  public filterResults(searchEvent: CoursesSearchEvent) {
    this.searchFilter = searchEvent.searchText;
    this.reloadList();
  }

  private reloadList(): void {
    this.coursesList = this.searchFilterPipe.transform(this.coursesService.getList(), this.searchFilter);
  }
}
