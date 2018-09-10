import { ApiCourse } from './api-course.model';
import { BasicCourse } from './basic-course.model';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USER_TOKEN_KEY } from 'app/core/authentication.service';
import { Course } from 'app/courses/course.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';

const COURSES_URL = 'http://localhost:3004/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private coursesList: Course[];

  constructor(private httpClient: HttpClient) { }

  public addNew(title: string, duration: number, creationDate: Date, description: string, topRated: boolean): Observable<Course> {
    const newCourse = new BasicCourse({ title, duration, creationDate, description, topRated });
    const apiCourse = this.convertToApiFormat(newCourse);

    return this.httpClient.post<ApiCourse>(COURSES_URL, apiCourse)
      .pipe(
        map((c) => this.convertFromApiFormat(c)),
        retry(3),
        catchError(this.handleError)
      );
  }

  public getById(courseId: number): Observable<Course> {
    return this.httpClient.get<ApiCourse>(COURSES_URL + "/" + courseId)
      .pipe(
        map((c) => this.convertFromApiFormat(c)),
        retry(3),
        catchError(this.handleError)
      );
  }

  public getList(start: number, count: number, searchText): Observable<Course[]> {
    const params = this.createRequestParams(start, count, searchText);

    return this.httpClient.get<ApiCourse[]>(COURSES_URL, { params })
      .pipe(
        map((c) => this.convertArrayFromApiFormat(c)),
        retry(3),
        catchError(this.handleError)
      );
  }


  public create(): Course {
    const course = new BasicCourse({
      title: "",
      creationDate: new Date(Date.now()),
      duration: 0,
      description: "",
      topRated: false
    });
    return course;
  }

  public update(updatedCourse: Course): Observable<Course> {
    const apiCourse = this.convertToApiFormat(updatedCourse);
    return this.httpClient.put<ApiCourse>(COURSES_URL + "/" + updatedCourse.id, apiCourse)
      .pipe(
        map((c) => this.convertFromApiFormat(c)),
        retry(3),
        catchError(this.handleError)
      );
  }

  public remove(courseId: number): Observable<Course> {
    return this.httpClient.delete<ApiCourse>(COURSES_URL + "/" + courseId)
      .pipe(
        map(this.convertFromApiFormat),
        retry(3),
        catchError(this.handleError)
      );
  }

  private convertArrayFromApiFormat(apiCourses: ApiCourse[]): Course[] {
    return apiCourses.map(this.convertFromApiFormat);
  }

  private convertFromApiFormat({id, name: title, date, length: duration, description, isTopRated: topRated }: ApiCourse): Course {
    return new BasicCourse({
      id,
      title,
      creationDate: new Date(date),
      duration ,
      description,
      topRated
    });
  }

  private convertToApiFormat({ id, title: name, creationDate, duration: length, description, topRated: isTopRated }: Course): ApiCourse {
    return ({
      id,
      name,
      date: creationDate.toString(),
      length,
      description,
      isTopRated,
      authors: null
    });
  }

  private createRequestParams(start: number, count: number, searchText: string) {
    return {
      start: start.toString(),
      count: count.toString(),
      textFragment: searchText
    };
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
