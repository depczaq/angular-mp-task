import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'app/app.component';
import { ROUTES } from 'app/app.routes';
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
