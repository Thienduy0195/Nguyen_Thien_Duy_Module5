import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Company} from "../models/company";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  // private URL_CATALOG_API = 'http://localhost:3000/subobjects';
  private URL_COMPANY_API = 'http://localhost:8080/company';

  constructor(private httpClient: HttpClient) {
  }

  // getAllCompany(): Observable<Company[]> {
  //   return this.httpClient.get<Company[]>(this.URL_CATALOG_API);
  // }

  getAllCompanyApi(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.URL_COMPANY_API + '/list');
  }
}
