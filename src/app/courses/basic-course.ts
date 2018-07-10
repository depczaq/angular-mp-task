import { Course } from 'app/courses/course.model';

export class BasicCourse implements Course {
    id: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
    topRated: boolean = false;

    constructor(properties: any) {
        Object.assign(this, properties);
    }
}
