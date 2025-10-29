export interface ITasks {
    title:              string;
    description:        string | null | undefined;
    category:           ICategory;
    status:             string;
    priority:           string;
    start_dt:            Date;
    end_dt:              Date;
}

export interface IAssistant {
    category: ICategory[];
    status: IStatus[];
    priority: IPriority[];
}
export interface ICategory {
    id?:  number;
    name: string;
}
export interface IStatus {
    name: string;
}
export interface IPriority {
    name: string;
}
 