import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private coursesService: CoursesService,
    private searchFilterPipe: CoursesFilterPipe,
    private router: Router) {

    this.coursesList = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("LIFECYCLE ngOnChanges");
  }

  ngOnInit(): void {
    console.log("LIFECYCLE ngOnInit");
    this.reloadList();
  }

  ngDoCheck(): void {
    console.log("LIFECYCLE ngDoCheck");
  }

  ngOnDestroy(): void {
    console.log("LIFECYCLE ngOnDestroy");
  }

  public removeCourse(course: Course): void {
    if (this.removeConfirmation(course)) {
      this.coursesService.remove(course.id);
      this.reloadList();
    }
  }

  private removeConfirmation(course: Course): boolean {
    return confirm(`Are you sure you want to delete the course \'${course.title}\'`);
  }

  public addNewCourse(): void {
    this.router.navigate(['/courses/new']);
  }

  public editCourse(course: Course): void {
    this.router.navigate(['/courses', course.id]);
  }

  public loadMore(): void {
    console.log("Load more");
  }

  public filterResults(searchEvent: CoursesSearchEvent): void {
    this.searchFilter = searchEvent.searchText;
    this.reloadList();
  }

  private reloadList(): void {
    this.coursesList = this.searchFilterPipe.transform(this.coursesService.getList(), this.searchFilter);
  }
}
