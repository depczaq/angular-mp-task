import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCourseHighlight]'
})
export class CourseHighlightDirective implements OnInit {

  // TWO_WEEKS = 1000 millisecons * 60 seconds * 60 minutes * 24 hours * 14 days
  private static readonly twoWeeks: number = 1000 * 60 * 60 * 24 * 14;
  private static readonly freshCourseClass = 'new-course-item';
  private static readonly upcomingCourseClass = 'upcoming-course-item';

  @Input() creationDate: Date;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    const courseAge = this.calculateAge(this.creationDate);
    if (this.isFreshCourse(courseAge)) {
      this.addClass(CourseHighlightDirective.freshCourseClass);
    } else if (this.isUpcomingCourse(courseAge)) {
      this.addClass(CourseHighlightDirective.upcomingCourseClass);
    }
  }

  private calculateAge(date: Date) {
    return Date.now() - date.getTime();
  }

  private isUpcomingCourse(courseAge: number) {
    return courseAge < 0;
  }

  private isFreshCourse(courseAge: number) {
    return courseAge >= 0 && courseAge <= CourseHighlightDirective.twoWeeks;
  }

  private addClass(clazz: string) {
    this.renderer.addClass(this.elementRef.nativeElement, clazz);
  }
}
