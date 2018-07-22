import { BasicCourse } from './basic-course.model';
import { Injectable } from '@angular/core';
import { Course } from 'app/courses/course.model';
import { c1, c2, c3, c4, c5, c6, c7, c8 } from 'app/courses/courses-list';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private coursesList: Course[];

  constructor() { }

  public create(title: string, duration: number, creationDate: Date, description: string, topRated: boolean) {
    const newCourse = new BasicCourse({
      id: this.generateId(),
      title: title,
      duration: duration,
      creationDate: creationDate,
      description: description,
      topRated: topRated
    });
    this.internalList().push(newCourse);
  }

  public getById(courseId: number): Course {
    const course = this.getByIdInternal(courseId);
    return course ? this.copy(course) : undefined;
  }

  public getList(): Course[] {
    return Array.from(this.internalList(), c => this.copy(c));
  }

  public update(updatedCourse: Course): Course {
    const course = this.getByIdInternal(updatedCourse.id);
    if (course) {
      Object.assign(course, updatedCourse);
      return this.getById(updatedCourse.id);
    }
    return undefined;
  }

  public remove(courseId: number): boolean {
    const course = this.getByIdInternal(courseId);
    if (course) {
      const index = this.internalList().indexOf(course);
      const removed = this.internalList().splice(index, 1);
      return removed && removed.length > 0;
    }
    return false;
  }

  private generateId(): number {
    const maxId = this.internalList()
      .map(c => c.id)
      .sort(Math.max)
      .shift();
    return maxId + 1;
  }

  private internalList(): Course[] {
    if (!this.coursesList) {
      this.initList();
    }
    return this.coursesList;
  }

  private initList(): void {
    this.coursesList = [c1, c2, c3, c4, c5, c6, c7, c8];
  }

  private getByIdInternal(courseId: number): Course {
    return this.internalList().find(c => c.id === courseId);
  }

  private copy(course: Course): Course {
    const copy = Object.create(Object.getPrototypeOf(course));
    return Object.assign(copy, course);
  }
}
