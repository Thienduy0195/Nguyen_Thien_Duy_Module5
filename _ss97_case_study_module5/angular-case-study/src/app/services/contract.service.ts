import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contract} from "../interface/contract";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private baseUrl = `${environment.API_URL}/contracts`;

  constructor(private httpClient: HttpClient) {
  }

  getContracts(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(this.baseUrl);
  }

  postContract(contract: Contract): Observable<Contract> {
    return this.httpClient.post<Contract>(this.baseUrl, contract);

  }
}
