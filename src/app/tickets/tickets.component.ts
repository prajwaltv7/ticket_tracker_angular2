import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketserviceService } from '../services/ticketservice.service';
import { Ticket } from './tickets';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router,private ticketService:TicketserviceService) { }

  ngOnInit(): void {
   this.viewdata();
  }
 
  message : string = 'hellp';
  
  TicketList : Ticket[]=[];

  viewdata()
   {    
    this.ticketService.listAllTickets().subscribe(
      data=>{
        this.TicketList=data;
        console.log(this.TicketList)
      }
    )    
    }

   
}
