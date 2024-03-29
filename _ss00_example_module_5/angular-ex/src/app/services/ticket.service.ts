import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ticket} from "../models/ticket";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private URL_TICKET = 'http://localhost:3000/mainobjects';
  private URL_TICKET_API = 'http://localhost:8080/tickets';

  constructor(private httpClient: HttpClient) {
  }

  public getTicketListApi(page: number): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(this.URL_TICKET_API + '/list?page=' + page);
  }


  public saveTicketApi(ticket: Ticket): Observable<void> {
    return this.httpClient.post<void>(this.URL_TICKET_API + '/create', ticket);
  }

  public updateTicketApi(id: number, ticket: Ticket): Observable<void> {
    return this.httpClient.patch<void>(`${this.URL_TICKET_API}/update/${id}`, ticket);
  }

  public findByIdApi(id: number): Observable<Ticket> {
    return this.httpClient.get<Ticket>(`${this.URL_TICKET_API}/${id}`);
  }

  public deleteTicketApi(id: number): Observable<Ticket> {
    return this.httpClient.delete<Ticket>(`${this.URL_TICKET_API}/delete/${id}`);
  }

  public search(startDes: string, endDes: string, startDate: string, endDate: string): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(`${this.URL_TICKET_API}/search/${startDes}&${endDes}&${startDate}&${endDate}`);
  }

//BD JSON ----
  getAllTicket(): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(this.URL_TICKET);
  }

  save(ticket: Ticket): Observable<void> {
    return this.httpClient.post<void>(this.URL_TICKET, ticket);
  }

  update(product: Ticket): Observable<void> {
    return this.httpClient.patch<void>(this.URL_TICKET + '/' + product.id, product);
  }

  find(id: number): Observable<Ticket> {
    return this.httpClient.get<Ticket>(this.URL_TICKET + '/' + id);
  }

  // searchStartDes(s: string): Observable<Ticket[]> {
  //   if (s) {
  //     return this.httpClient
  //       .get<Ticket[]>(this.URL_TICKET + `/?startDes_like=${s.trim()}`)
  //       .pipe(tap((_) => console.log(`Searching for: ${s}`)));
  //   } else {
  //     return this.httpClient.get<Ticket[]>(this.URL_TICKET);
  //   }
  // }

  // searchEndDes(s: string): Observable<Ticket[]> {
  //   if (s) {
  //     return this.httpClient
  //       .get<Ticket[]>(this.URL_TICKET + `/?endDes_like=${s.trim()}`)
  //       .pipe(tap((_) => console.log(`Searching for: ${s}`)));
  //   } else {
  //     return this.httpClient.get<Ticket[]>(this.URL_TICKET);
  //   }
  // }
}
