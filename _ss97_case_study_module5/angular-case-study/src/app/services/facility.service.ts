import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Service} from "../interface/service";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  private baseUrl = `${environment.API_URL}/facility`;

  constructor(private httpClient: HttpClient) { }

  // getFacilities() {
  //   return this.httpClient.get<Service[]>(this.baseUrl);
  // }
  // updateFacility(service: Service): Observable<Service> {
  //   return this.httpClient.put<Service>(`${this.baseUrl}/${service.id}`, service);
  // }
  // postFacility(service: Service): Observable<Service> {
  //   return this.httpClient.post<Service>(this.baseUrl, service);
  // }
  // deleteFacility(id: number): Observable<Service> {
  //   return this.httpClient.delete<Service>(`${this.baseUrl}/${id}`);
  // }
  // findByIdAndType(id: number, type: number): Observable<Service> {
  //   return this.httpClient.get<Service>(`${this.baseUrl}?id=${id}&serviceType.id=${type}`);
  // }
}
