export interface ITabeData {
    columns: IColumn[];
    tableRow: any[];
}


export interface IColumn {
    title: string;
    propertyName: string;
    type?: 'date' | 'bool';
}