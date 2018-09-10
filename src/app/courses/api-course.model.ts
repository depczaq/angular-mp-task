export interface ApiCourse {
    readonly id: number;
    name: string;
    description: string;
    isTopRated: boolean;
    date: string;
    length: number;
    authors: any;
}
