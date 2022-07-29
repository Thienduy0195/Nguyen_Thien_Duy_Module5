import {Component, OnInit} from '@angular/core';
import {TicketService} from "../../../services/ticket.service";
import {CompanyService} from "../../../services/company.service";
import {ToastrService} from "ngx-toastr";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {Company} from "../../../models/company";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Ticket} from "../../../models/ticket";

@Component({
  selector: 'app-main-object-edit',
  templateUrl: './main-object-edit.component.html',
  styleUrls: ['./main-object-edit.component.css']
})
export class MainObjectEditComponent implements OnInit {
  subObjectList: Company[];
  id: number;
  mainObject: Ticket | undefined;
  formProduct: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    description: new FormControl('', [Validators.required]),
    amount: new FormControl(0, [Validators.required, Validators.min(0)]),
    status: new FormControl('', [Validators.required]),
    subObject: new FormControl('', [Validators.required])
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
    this.getAllCompany();
    this.id = Number(this.activatedRoute.snapshot.params.id);
    this.productService.find(this.id).subscribe(value => {
      console.log(value)
      if (value === undefined) {
        this.router.navigate(['/error']);
      }
      this.formProduct.patchValue(value);
    });
  }


  getAllCompany() {
    this.catalogService.getAllCompany().subscribe(value => {
      this.subObjectList = value;
      console.log(value)
    });
  }

  updateObject() {
    this.mainObject = this.formProduct.value
    this.productService.update(this.mainObject).subscribe(() => {
      this.router.navigate(['/list']);
      this.showSuccess();
    }, e => {
      console.log('error at update');
    });
  }


  showSuccess() {
    this.toastr.success('Update object successfully!', 'SUCCESSFULLY!');
  }
}
