import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Service} from "../models/service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  private baseUrl = `${environment.API_URL}/services`;

  constructor(private httpClient: HttpClient) {
  }

  getAllFacilities(): Observable<Service[]> {
    return this.httpClient.get<Service[]>(this.baseUrl);
  }

  updateService(service: Service): Observable<Service> {
    return this.httpClient.put<Service>(`${this.baseUrl}/${service.id}`, service);
  }

  saveService(service: Service): Observable<Service> {
    return this.httpClient.post<Service>(this.baseUrl, service);
  }

  // deleteFacility(id: number): Observable<Service> {
  //   return this.httpClient.delete<Service>(`${this.baseUrl}/${id}`);
  // }
  // findByIdAndType(id: number, type: number): Observable<Service> {
  //   return this.httpClient.get<Service>(`${this.baseUrl}?id=${id}&serviceType.id=${type}`);
  // }
}
