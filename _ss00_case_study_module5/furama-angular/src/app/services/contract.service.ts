import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contract} from "../models/contract";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private baseUrl = `${environment.API_URL}/contracts`;

  constructor(private httpClient: HttpClient) {
  }

  getAllContracts(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(this.baseUrl);
  }

  saveContract(contract: Contract): Observable<Contract> {
    console.log('HERE')
    return this.httpClient.post<Contract>(this.baseUrl, contract);
  }
}
