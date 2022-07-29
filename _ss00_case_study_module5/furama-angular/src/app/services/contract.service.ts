import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contract} from "../models/contract";
import {Customer} from "../models/customer";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private baseUrl = `${environment.API_URL}/contracts`;

  constructor(private httpClient: HttpClient) {
  }

  //SPRING BACK END
  API_URL8080 = `${environment.API_URL_8080_CONTRACT}`;

  public getCustomerListApi(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(this.API_URL8080);
  }
  public deleteContractApi(id: number): Observable<Contract> {
    console.log('log here')
    return this.httpClient.delete<Contract>(`${this.API_URL8080}/delete/${id}`);
  }

  //JSON
  getAllContracts(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(this.baseUrl);
  }

  saveContract(contract: Contract): Observable<Contract> {
    return this.httpClient.post<Contract>(this.baseUrl, contract);
  }

  deleteContract(id: number): Observable<Contract> {
    return this.httpClient.delete<Contract>(`${this.baseUrl}/${id}`);
  }
}
