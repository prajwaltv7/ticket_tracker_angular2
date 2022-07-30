import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../tickets/tickets';



@Injectable({
  providedIn: 'root'
})
export class TicketserviceService {

  constructor(private http:HttpClient ) {}

  listAllTickets(){
    return this.http.get<any[]>('http://localhost:8686/tickets/getTicket')
  }
}
