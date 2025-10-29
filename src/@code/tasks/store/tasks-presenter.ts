import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { IAssistant, ICategory, ITasks } from "../interface/tasks.interface";

@Injectable()
export class TasksPresenter {
    constructor(
    ) { }

    private _createTasks = new Subject<ITasks>();
    public readonly createTasks$ = this._createTasks.asObservable();

    setTasks(data: ITasks) {
        this._createTasks.next(data);
    }

    private _getTask = new Subject<string>();
    public readonly getTask$ = this._getTask.asObservable();

    getTask(id: string) {
        this._getTask.next(id);
    }


    private _getAllTask = new Subject<any>();
    public readonly getAllTask$ = this._getAllTask.asObservable();

    getAllTask(data: any) {
        this._getAllTask.next(data);
    }
    

    
    private _createCategory = new Subject<ICategory>();
    public readonly createCategory$ = this._createCategory.asObservable();

    createCategory(data: ICategory) {
        this._createCategory.next(data);
    }

}