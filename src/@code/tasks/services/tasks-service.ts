import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../../../env';
import { IAssistant, ICategory, ITasks } from '../interface/tasks.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private apiUrl = env.apiUrl;

  constructor(private http: HttpClient) {}

  getAllTasks() {
    return this.http.get<Response>(`${this.apiUrl}/tasks`);
  }

//   createTasks(data: Tasks): Observable<ApiResponse> {
//     return this.http.post<ApiResponse>(`${this.apiUrl}/tasks/create`);
//   }

  createTasks(data: ITasks) {
    return this.http.post<Response>(`${this.apiUrl}/tasks/create`, data)
  }

  getTask(id:string) {
    return this.http.get<Response>(`${this.apiUrl}/tasks/${id}`)
  }


  //CATEGORY
  createCategory(data: ICategory) {
    return this.http.post<Response>(`${this.apiUrl}/category/create`, data)
  }

  //
  getAssistant() {
    return this.http.get<IAssistant>(`${this.apiUrl}/tasks/assistant`);
  }
}