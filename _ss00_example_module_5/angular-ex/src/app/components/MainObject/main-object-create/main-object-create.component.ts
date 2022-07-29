import {Component, OnInit} from '@angular/core';
import {MainObjectService} from "../../../services/main-object.service";
import {SubObjectService} from "../../../services/sub-object.service";
import {Router} from "@angular/router";
import {SubObject} from "../../../models/sub-object";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-main-object-create',
  templateUrl: './main-object-create.component.html',
  styleUrls: ['./main-object-create.component.css']
})
export class MainObjectCreateComponent implements OnInit {
  companies: SubObject[];

  formTicket: FormGroup = new FormGroup({
    id: new FormControl(),
    price: new FormControl(0, [Validators.min(0)]),
    startDes: new FormControl('', [Validators.required]),
    endDes: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required, this.checkStartDay]),
    startHour: new FormControl('', [Validators.required]),
    subObject: new FormControl(null, [Validators.required]),
    amount: new FormControl(0, [Validators.required, Validators.required, Validators.min(0)]),
  });

  constructor(private ticketService: MainObjectService,
              private companyService: SubObjectService,
              private toastr: ToastrService,
              private title: Title,
              private router: Router) {
    this.title.setTitle('Ticket | Create')
  }

  showSuccess() {
    this.toastr.success('Add new ticket successfully!', 'ADD NEW!');
  }

  ngOnInit(): void {
    this.getAllSubObject();
  }

  getAllSubObject() {
    this.companyService.getAllCompany().subscribe(value => {
      this.companies = value;
      console.log(value)
    });
  }

  addNewTicket() {
    const mainObject = this.formTicket.value
    this.ticketService.save(mainObject).subscribe(value => {
      this.showSuccess();
      setTimeout(() => {
        this.router.navigateByUrl('/list');
      }, 1000);
    });
  }

  checkStartDay(a: AbstractControl): any {
    const day = a.value.substring(8, 10);
    const currentDay = new Date().getDate();
    return day - currentDay >= 1 ? null : {notValid: true};
  }
}
