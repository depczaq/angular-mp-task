import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/core/user.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';

export const USER_TOKEN_KEY = 'userToken';

const LOGIN_URL = 'http://localhost:3004/auth/login';
const USER_INFO_URL = 'http://localhost:3004/auth/userinfo';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public redirectUrl: string;

  constructor(private httpClient: HttpClient) { }

  public logIn(username: string, password: string): Observable<boolean> {
    return this.httpClient.post<any>(LOGIN_URL, { login: username, password })
      .pipe(
        tap((response) => localStorage.setItem(USER_TOKEN_KEY, response.token)),
        map(this.isAutheticated),
        catchError(this.handleError)
      );
  }

  public logOut(): void {
    localStorage.removeItem(USER_TOKEN_KEY);
  }

  public isAutheticated(): boolean {
    return localStorage.getItem(USER_TOKEN_KEY) ? true : false;
  }

  public getUserInfo(): Observable<User> {
    const headers: HttpHeaders = this.createRequestHeaders();

    return this.httpClient.post<any>(USER_INFO_URL, {}, { headers })
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  private createRequestHeaders(): HttpHeaders {
    const userToken = localStorage.getItem(USER_TOKEN_KEY);
    return new HttpHeaders({ 'Authorization': userToken });
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
