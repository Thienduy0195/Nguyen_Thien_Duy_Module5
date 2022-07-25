import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product: Product;
  products: Product[];
  private baseUrl = `${environment.apiUrl}/products`;

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl);
  }

  saveProduct(product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseUrl, product);
  }

  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.baseUrl + '/' + id);
  }
  updateProduct(id: number, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.baseUrl}/${id}`, product);
  }

  deleteProduct(id: number) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products.splice(i, 1);
      }
    }
  }
}
