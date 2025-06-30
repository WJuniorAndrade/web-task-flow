export interface Tasks {
    title:              string;
    description:        string | null | undefined;
    category:           string;
    status:             string;
    priority:           string;
    startDt:            Date;
    endDt:              Date;
}

export interface Category {
    id:  number;
    title: string;
}