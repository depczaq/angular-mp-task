import { Course } from "./course";

export class BasicCourse implements Course {
    id: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;

    constructor(id: number, title: string, creationDate: Date, duration: number, description: string) {
        this.id = id;
        this.title = title;
        this.creationDate = creationDate;
        this.duration = duration;
        this.description = description;
    }
}
