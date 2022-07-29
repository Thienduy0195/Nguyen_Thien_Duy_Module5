import {Component, OnInit} from '@angular/core';
import {TicketService} from "../../../services/ticket.service";
import {CompanyService} from "../../../services/company.service";
import {Router} from "@angular/router";
import {Company} from "../../../models/company";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-main-object-create',
  templateUrl: './main-object-create.component.html',
  styleUrls: ['./main-object-create.component.css']
})
export class MainObjectCreateComponent implements OnInit {
  companyList: Company[];

  formTicket: FormGroup = new FormGroup({
    id: new FormControl(),
    price: new FormControl(0, [Validators.min(0)]),
    startDes: new FormControl('', [Validators.required]),
    endDes: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required, this.checkStartDay]),
    startHour: new FormControl('', [Validators.required]),
    company: new FormControl(null, [Validators.required]),
    amount: new FormControl(0, [Validators.required, Validators.required, Validators.min(0)]),
  });

  constructor(private ticketService: TicketService,
              private companyService: CompanyService,
              private toastr: ToastrService,
              private title: Title,
              private router: Router) {
    this.title.setTitle('Ticket | Create')
  }

  showSuccess() {
    this.toastr.success('Add new ticket successfully!', 'ADD NEW!');
  }

  ngOnInit(): void {
    this.getAllCompany();
  }

  getAllCompany() {
    this.companyService.getAllCompanyApi().subscribe((value:any) => {
      this.companyList = value.content;
    })
  }

  addNewTicket() {
    const ticket = this.formTicket.value
    console.log(ticket)
    this.ticketService.saveTicketApi(ticket).subscribe(value => {
      this.showSuccess();
      this.router.navigateByUrl('/list');
    });
  }

  // addNewTicket() {
  //   const ticket = this.formTicket.value
  //   this.ticketService.save(ticket).subscribe(value => {
  //     this.showSuccess();
  //     setTimeout(() => {
  //       this.router.navigateByUrl('/list');
  //     }, 1000);
  //   });
  // }


  checkStartDay(a: AbstractControl): any {
    const day = a.value.substring(8, 10);
    const currentDay = new Date().getDate();
    return day - currentDay >= 1 ? null : {notValid: true};
  }
}
