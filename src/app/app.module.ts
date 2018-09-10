import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'app/app.component';
import { ROUTES } from 'app/app.routes';
import { AuthorizationInterceptor } from 'app/core/authorization-interceptor';
import { CoreModule } from 'app/core/core.module';
import { CoursesModule } from 'app/courses/courses.module';
import { LoginModule } from 'app/login/login.module';
import { RouterModule, } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CoursesModule,
    LoginModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
