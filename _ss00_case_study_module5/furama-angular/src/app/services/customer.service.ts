import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../models/customer";
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = `${environment.API_URL}/customers`;

  constructor(private httpClient: HttpClient) {
  }

  getCustomerList(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.baseUrl);
  }

  saveCustomer(customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.baseUrl, customer);
  }

  findById(id: string): Observable<Customer> {
    return this.httpClient.get<Customer>(this.baseUrl + '/' + id);
  }
  // getCustomerListByObjectTS() {
  //   return this.customers;
  // }

  // addCustomerToObjectTS(customer) {
  //   this.customers.push(customer);
  // }

//   updateCustomerToObjectTs(customer) {
//     const indexToUpdate = this.customers.findIndex(item => item.id === customer.id);
//     this.customers[indexToUpdate] = customer;
//   }
//
//   deleteCustomerToObjectTS(idToDelete: string) {
//     this.customers = this.customers.filter(item => item.id !== idToDelete);
//   }
//
//   findById(customerIdFromRoute: string) {
//     return this.customers.find(customer => customer.id == customerIdFromRoute);
//   }
// }
}
