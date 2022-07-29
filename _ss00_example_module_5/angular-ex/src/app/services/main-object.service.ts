import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MainObject} from "../models/main-object";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MainObjectService {

  private URL_TICKET = 'http://localhost:3000/mainobjects';

  constructor(private httpClient: HttpClient) {
  }


  getAllTicket(): Observable<MainObject[]> {
    return this.httpClient.get<MainObject[]>(this.URL_TICKET);
  }

  save(product: MainObject): Observable<void> {
    return this.httpClient.post<void>(this.URL_TICKET, product);
  }

  update(product: MainObject): Observable<void> {
    return this.httpClient.patch<void>(this.URL_TICKET + '/' + product.id, product);
  }

  find(id: number): Observable<MainObject> {
    return this.httpClient.get<MainObject>(this.URL_TICKET + '/' + id);
  }

  searchStartDes(s: string): Observable<MainObject[]> {
    if (s) {
      return this.httpClient
        .get<MainObject[]>(this.URL_TICKET + `/?startDes_like=${s.trim()}`)
        .pipe(tap((_) => console.log(`Searching for: ${s}`)));
    } else {
      return this.httpClient.get<MainObject[]>(this.URL_TICKET);
    }
  }

  searchEndDes(s: string): Observable<MainObject[]> {
    if (s) {
      return this.httpClient
        .get<MainObject[]>(this.URL_TICKET + `/?endDes_like=${s.trim()}`)
        .pipe(tap((_) => console.log(`Searching for: ${s}`)));
    } else {
      return this.httpClient.get<MainObject[]>(this.URL_TICKET);
    }
  }
}
