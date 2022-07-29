import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../models/customer";
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  constructor(private httpClient: HttpClient) {
  }

  //SPRING BACK END
  ApiUrl_8080 = `${environment.API_URL_8080}`;

  public getCustomerListApi(page: number): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.ApiUrl_8080 + '/list?page=' + page);
  }

  public getCustomerTypeListApi(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.ApiUrl_8080 + '/customer_type_list');
  }

  public saveCustomerApi(customer: Customer): Observable<void> {
    return this.httpClient.post<void>(this.ApiUrl_8080 + '/create', customer);
  }

  public deleteCustomerApi(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(`${this.ApiUrl_8080}/delete/${id}`);
  }

  public findByIdApi(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.ApiUrl_8080}/${id}`);
  }

  public updateCustomerApi(id: number, customer: Customer): Observable<void> {
    return this.httpClient.patch<void>(`${this.ApiUrl_8080}/update/${id}`, customer);
  }


// J-SON SERVER
  private baseUrl = `${environment.API_URL}/customers`;

  getCustomerList(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.baseUrl);
  }

  saveCustomer(customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.baseUrl, customer);
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.baseUrl + '/' + id);
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.patch<Customer>(`${this.baseUrl}/${id}`, customer);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(`${this.baseUrl}/${id}`);
  }


  // getCustomerListTs() {
  //   return this.customers;
  // }

  // addCustomerTs(customer) {
  //   this.customers.push(customer);
  // }

//   updateCustomerTs(customer) {
//     const indexToUpdate = this.customers.findIndex(item => item.id === customer.id);
//     this.customers[indexToUpdate] = customer;
//   }
//
//   deleteCustomerTs(idToDelete: string) {
//     this.customers = this.customers.filter(item => item.id !== idToDelete);
//   }
//
//   findById(customerIdFromRoute: string) {
//     return this.customers.find(customer => customer.id == customerIdFromRoute);
//   }
// }
}
