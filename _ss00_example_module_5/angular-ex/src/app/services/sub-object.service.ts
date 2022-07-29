import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SubObject} from "../models/sub-object";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubObjectService {

  private URL_CATALOG_API = 'http://localhost:3000/subobjects';

  constructor(private httpClient: HttpClient) {
  }

  getAllCompany(): Observable<SubObject[]> {
    return this.httpClient.get<SubObject[]>(this.URL_CATALOG_API);
  }
}
