import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Category, Tasks } from "../interface/tasks.interface";

@Injectable()
export class TasksPresenter {
    constructor(
    ) { }

    private _createTasks = new Subject<Tasks>();
    public readonly createTasks$ = this._createTasks.asObservable();

    createTasks(data: Tasks) {
        this._createTasks.next(data);
    }


    private _createCategory = new Subject<Category>();
    public readonly createCategory$ = this._createCategory.asObservable();

    createCategory(data: Category) {
        this._createCategory.next(data);
    }
}