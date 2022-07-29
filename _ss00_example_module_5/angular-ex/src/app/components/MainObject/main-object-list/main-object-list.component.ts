      import {Component, OnInit} from '@angular/core';
      import {Title} from "@angular/platform-browser";
      import {Ticket} from "../../../models/ticket";
      import {Company} from "../../../models/company";
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
        endDate: string;
        startHour: string;
        checkTicket = true;
        ticketList: Ticket[];
        companyList: Company[];

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
          this.toastr.success('Booking successfully!', 'SUCCESSFULLY!');
        }

        notFoundSearch() {
          this.toastr.error('Not found!', 'SEARCH!');
        }

        ngOnInit(): void {
          this.companyService.getAllCompany().subscribe(value => {
            this.companyList = value;
          });
          this.toastr.success('Welcome to ticket Management!', 'WELCOME!!');
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
          if (this.startDate === '') {
            this.startDate = '2000-01-01';
          }
          if (this.endDate === '') {
            this.endDate = '2200-01-01';
          }
          this.ticketService.search(this.startDes, this.endDes,
            this.startDate, this.endDate).subscribe((tickets: any) => {
            if (tickets != null) {
              this.ticketList = tickets.content;
            } else {
              this.ticketList = [];
            }
            this.page = 1;
          });
        }
      }
