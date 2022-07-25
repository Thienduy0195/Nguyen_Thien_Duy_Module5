import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {environment} from '../../environments/environment';
import {Category} from '../model/category';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  category: Category;
  private baseUrl = `${environment.apiUrl}/categories`;

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.baseUrl);
  }

  findById(id: number): Observable<Category> {
    return this.httpClient.get<Category>(this.baseUrl + '/' + id);
  }
}
