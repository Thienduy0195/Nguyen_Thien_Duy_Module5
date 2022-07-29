import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Ticket} from "../../../models/ticket";
import {TicketService} from "../../../services/ticket.service";
import {CompanyService} from "../../../services/company.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-main-object-list',
  templateUrl: './main-object-list.component.html',
  styleUrls: ['./main-object-list.component.css']
})
export class MainObjectListComponent implements OnInit {
  idTicket: number;
  page = 1;
  pageNumber: number = 0;
  totalPages = 0;
  ticket: Ticket;
  startDes: string;
  endDes: string;
  startDate: string;
  startHour: string;
  startDesSearch: string;
  endDesSearch: string;
  startDateSearch: string;
  endDateSearch: string;
  checkTicket = true;
  ticketList: Ticket[];

  constructor(private ticketService: TicketService,
              private companyService: CompanyService,
              private toastr: ToastrService,
              private router: Router,
              private title: Title) {
    this.title.setTitle('Ticket | Management')
    // Ticket List
    this.getAllTicket();
  }

  getAllTicket() {
    this.ticketService.getTicketListApi(this.pageNumber).subscribe(result => {
      // @ts-ignore
      this.ticketList = result.content;
      console.log(this.ticketList)
      // @ts-ignore
      this.totalPages = result.length;
      // @ts-ignore
      this.pageNumber = result.pageable.pageNumber;
    }, error => {
      this.ticketList = [];
      console.log('error at get list spring!');
    });
  }

  showSuccess() {
    this.toastr.success('Booking successfully!', 'BOOKING!');
  }

  notFoundSearch() {
    this.toastr.error('Searching not found!', 'SEARCH!');
  }

  ngOnInit(): void {
    this.toastr.success('Welcome to ticket List!', 'WELCOME!!');
  }

  getTicketId(id: number) {
    this.idTicket = id;
    console.log(this.idTicket)
    this.ticketService.findByIdApi(id).subscribe(ticket => {
      this.ticket = ticket;
      console.log(ticket)
      this.startDes = this.ticket.startDes;
      this.endDes = this.ticket.endDes;
      this.startDate = this.ticket.startDate;
      this.startHour = this.ticket.startHour;
      console.log(this.checkTicket)
    })
  }

  bookingTicket() {
    if (this.ticket.amount > 0) {
      this.ticket.amount -= 1;
      this.ticketService.updateTicketApi(this.idTicket, this.ticket).subscribe(() => {
        this.showSuccess();
        this.getAllTicket();
        this.router.navigateByUrl('/list');
      });
    } else {
      this.toastr.error("The ticket is exhausted!", 'EXHAUSTED!!')
      this.router.navigateByUrl('/list');
    }
  }

  deleteTicket() {
    this.ticketService.deleteTicketApi(this.idTicket).subscribe(result => {
      this.getAllTicket();
      this.toastr.warning("Deleting ticket successfully!", "DELETING")
    }, error => {
      this.toastr.error("Deleting fail!", "DELETING")
    })

  }

  search() {
    if (this.startDesSearch === undefined) {
      this.startDesSearch = '';
    }
    if (this.endDesSearch === undefined) {
      this.endDesSearch = '';
    }
    if (this.startDateSearch === undefined) {
      this.startDateSearch = '1500-01-01';
    }
    if (this.endDateSearch === undefined) {
      this.endDateSearch = '2500-01-01';
    }
    this.ticketService.search(this.startDesSearch, this.endDesSearch,
      this.startDateSearch, this.endDateSearch).subscribe((value: any) => {
      if (value != null) {
        this.ticketList = value.content;
        if (this.startDateSearch === '1500-01-01') {
          this.startDateSearch = undefined;
        }
        if (this.endDateSearch === '2500-01-01') {
          this.endDateSearch = undefined;
        }
      } else {
        console.log("error")
        this.startDateSearch = undefined;
        this.endDateSearch = undefined;
        this.notFoundSearch();
        this.ticketList = [];
      }
      this.page = 1;
    }, error => {
      this.notFoundSearch();
      this.page = 1;
    })
  }
}
