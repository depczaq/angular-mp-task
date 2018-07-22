import { Course } from 'app/courses/course.model';

export class BasicCourse implements Course {
    readonly id: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
    topRated: boolean;

    constructor(properties: any) {
        Object.assign(this, properties);
    }
}
