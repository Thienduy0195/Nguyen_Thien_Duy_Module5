import {Component, OnInit} from '@angular/core';
import {TicketService} from "../../../services/ticket.service";
import {CompanyService} from "../../../services/company.service";
import {ToastrService} from "ngx-toastr";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {Company} from "../../../models/company";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Ticket} from "../../../models/ticket";

@Component({
  selector: 'app-main-object-edit',
  templateUrl: './main-object-edit.component.html',
  styleUrls: ['./main-object-edit.component.css']
})
export class MainObjectEditComponent implements OnInit {
  companyList: Company[];
  id: number;
  ticket: Ticket | undefined;
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

  compareByObjectId(itemOne, itemTwo) {
    // tslint:disable-next-line:triple-equals
    return itemOne && itemTwo && itemOne.id == itemTwo.id;
  }

  constructor(private productService: TicketService,
              private catalogService: CompanyService,
              private activatedRoute: ActivatedRoute,
              private toastr: ToastrService,
              private title: Title,
              private router: Router) {
    this.title.setTitle('Object | Edit')
  }

  ngOnInit(): void {
    this.getAllCompany(); //GET FROM API
    this.id = Number(this.activatedRoute.snapshot.params.id);
    this.productService.findByIdApi(this.id).subscribe(value => {
      console.log(value)
      if (value === undefined) {
        this.router.navigate(['/error']);
      }
      this.formTicket.patchValue(value);
    });
  }


  getAllCompany() {
    this.catalogService.getAllCompanyApi().subscribe(value => {
      this.companyList = value;
      console.log(value)
    });
  }

  updateTicket() {
    this.ticket = this.formTicket.value
    console.log(this.ticket)
    this.productService.updateTicketApi(this.id, this.ticket).subscribe(() => {
      this.router.navigate(['/list']);
      this.showSuccess();
    }, e => {
      this.toastr.error("ERROR")
    });
  }

  checkStartDay(a: AbstractControl): any {
    const day = a.value.substring(8, 10);
    const currentDay = new Date().getDate();
    return day - currentDay >= 1 ? null : {notValid: true};
  }

  // updateObject() {
  //   this.mainObject = this.formProduct.value
  //   this.productService.update(this.mainObject).subscribe(() => {
  //     this.router.navigate(['/list']);
  //     this.showSuccess();
  //   }, e => {
  //     console.log('error at update');
  //   });
  // }


  showSuccess() {
    this.toastr.success('Update object successfully!', 'SUCCESSFULLY!');
  }
}
