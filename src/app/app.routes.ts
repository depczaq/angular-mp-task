import { Routes } from '@angular/router';
import { AuthenticationGuard } from 'app/core/authentication/authentication.guard';
import { PageNotFoundComponent } from 'app/core/page-not-found/page-not-found.component';
import { CourseEditComponent } from 'app/courses/course-edit/course-edit.component';
import { CourseResolver } from 'app/courses/course-resolver.service';
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
        canActivate: [AuthenticationGuard],
        resolve: {
            course: CourseResolver
        }
    },

    // edit course
    {
        path: 'courses/:id',
        component: CourseEditComponent,
        canActivate: [AuthenticationGuard],
        resolve: {
            course: CourseResolver
        }
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
