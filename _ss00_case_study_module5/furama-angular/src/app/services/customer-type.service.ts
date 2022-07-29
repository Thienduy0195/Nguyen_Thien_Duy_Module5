import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerType} from "../models/customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  private baseUrl = `${environment.API_URL}/customerTypes`;

  constructor(private httpClient: HttpClient) {
  }

  getCustomerTypeList(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(this.baseUrl);
  }

  findById(id: number): Observable<CustomerType> {
    return this.httpClient.get<CustomerType>(this.baseUrl + '/' + id);
  }

}
