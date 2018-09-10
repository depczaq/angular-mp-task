import { AuthenticationGuard } from './core/authentication.guard';
import { Routes } from '@angular/router';
import { PageNotFoundComponent } from 'app/core/page-not-found/page-not-found.component';
import { CourseEditComponent } from 'app/courses/course-edit/course-edit.component';
import { CoursesListComponent } from 'app/courses/courses-list/courses-list.component';
import { LoginPageComponent } from 'app/login/login-page/login-page.component';

export const ROUTES: Routes = [
    // default route
    {
        path: '',
        redirectTo: '/courses',
        pathMatch: 'full',
        canActivate: [AuthenticationGuard]
    },

    // courses list
    {
        path: 'courses',
        component: CoursesListComponent,
        canActivate: [AuthenticationGuard]
    },

    // new course
    {
        path: 'courses/new',
        component: CourseEditComponent,
        canActivate: [AuthenticationGuard]
    },

    // edit course
    {
        path: 'courses/:id',
        component: CourseEditComponent,
        canActivate: [AuthenticationGuard]
    },

    // login page
    {
        path: 'login',
        component: LoginPageComponent
    },

    // page not found
    {
        path: '**',
        component: PageNotFoundComponent,
        canActivate: [AuthenticationGuard]
    }
];
