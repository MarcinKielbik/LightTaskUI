import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Task {
  id: number;
  title: string;
  description: string;
  done:
  boolean;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/tasks`);
  }
}
