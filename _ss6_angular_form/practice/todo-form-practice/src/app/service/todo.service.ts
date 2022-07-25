import {Injectable} from '@angular/core';
import {Todo} from '../todo/todo';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = `${environment.apiUrl}/todos`;

  constructor(private httpClient: HttpClient) {
  }

  getAllTodo(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.baseUrl);
  }

  save(todo): Observable<Todo> {
    return this.httpClient.post<Todo>(this.baseUrl, todo);
  }

  update(id: number, todo: Todo): Observable<Todo> {
    return this.httpClient.patch<Todo>(`${this.baseUrl}/${id}`, todo);
  }

  delete(id: number): Observable<Todo> {
    return this.httpClient.delete<Todo>(`${this.baseUrl}/${id}`);
  }
}
