import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {MainObject} from "../../../models/main-object";
import {SubObject} from "../../../models/sub-object";
import {MainObjectService} from "../../../services/main-object.service";
import {SubObjectService} from "../../../services/sub-object.service";
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
  ticket: MainObject;
  startDes: string;
  endDes: string;
  startDate: string;
  startHour: string;
  checkTicket = true;
  ticketList: MainObject[];
  companyList: SubObject[];

  constructor(private productService: MainObjectService,
              private catalogService: SubObjectService,
              private toastr: ToastrService,
              private router: Router,
              private title: Title) {
    this.title.setTitle('Ticket | Management')
    // Ticket List
    this.getAllTicket();
  }

  getAllTicket() {
    this.productService.getAllTicket().subscribe(value => {
      this.ticketList = value;
    });
  }

  showSuccess() {
    this.toastr.success('Booking successfully!', 'SUCCESSFULLY!');
  }

  notFoundSearch() {
    this.toastr.error('Not found!', 'SEARCH!');
  }

  ngOnInit(): void {
    this.catalogService.getAllCompany().subscribe(value => {
      this.companyList = value;
    });
    this.toastr.success('Welcome to ticket Management!', 'WELCOME!!');
  }


  searchStartDestination(s: string) {
    console.log(s);
    this.productService.searchStartDes(s).subscribe(value => {
      this.ticketList = value;
      if (value.length == 0) {
        this.notFoundSearch()
      }
      this.page = 1;
    }, error => {
      this.ticketList = null;
    });
  }

  getTicketId(id: number) {
    this.idTicket = id;
    this.productService.find(id).subscribe(ticket => {
      this.ticket = ticket;
        this.checkTicket = true;
        this.startDes = this.ticket.startDes;
        this.endDes = this.ticket.endDes;
        this.startDate = this.ticket.startDate;
        this.startHour = this.ticket.startHour;
      console.log(this.checkTicket)
    })
  }

  bookingTicket() {
    if(this.ticket.amount>0){
      this.ticket.amount -= 1;
      this.productService.update(this.ticket).subscribe(() => {
        this.showSuccess();
        this.getAllTicket();
      });
      setTimeout(() => {
        this.router.navigateByUrl('/list');
      }, 1000);
    }else {
      this.toastr.error("The ticket is exhausted!", 'EXHAUSTED!!')
      this.router.navigateByUrl('/list');
    }
  }

  searchEndDestination(value: string) {
    console.log(value);
    this.productService.searchEndDes(value).subscribe(value => {
      this.ticketList = value;
      if (value.length == 0) {
        this.notFoundSearch()
      }
      this.page = 1;
    }, error => {
      this.ticketList = null;
    });
  }
}
