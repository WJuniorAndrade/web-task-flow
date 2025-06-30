import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../../../env';
import { Tasks } from '../interface/tasks.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private apiUrl = env.apiUrl;

  constructor(private http: HttpClient) {}

  getDados() {
    return this.http.get(`${this.apiUrl}/tasks`);
  }

//   createTasks(data: Tasks): Observable<ApiResponse> {
//     return this.http.post<ApiResponse>(`${this.apiUrl}/tasks/create`);
//   }

  createTasks(data:Tasks) {
    return this.http.post<Response>(`${this.apiUrl}/tasks/create`, data)
  }
}