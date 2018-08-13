import { Routes } from '@angular/router';
import { PageNotFoundComponent } from 'app/core/page-not-found/page-not-found.component';
import { CourseEditComponent } from 'app/courses/course-edit/course-edit.component';
import { CoursesListComponent } from 'app/courses/courses-list/courses-list.component';

export const ROUTES: Routes = [
    // default route
    {
        path: '',
        redirectTo: '/courses',
        pathMatch: 'full'
    },

    // courses list
    {
        path: 'courses',
        component: CoursesListComponent
    },

    // new course
    {
        path: 'courses/new',
        component: CourseEditComponent
    },

    // edit course
    {
        path: 'courses/:id',
        component: CourseEditComponent
    },

    // page not found
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
