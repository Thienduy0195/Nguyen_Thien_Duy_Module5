import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../../../services/customer.service";
import {CustomerTypeService} from "../../../services/customer-type.service";
import {Customer} from "../../../models/customer";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../../models/customer-type";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customerTypeList: CustomerType [];

  constructor(private activatedRoute: ActivatedRoute,
              private route: Router,
              private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private toastr: ToastrService) {
  }

  customer: Customer | undefined;
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    customerCode: new FormControl('', [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
    name: new FormControl('', [Validators.required]),
    birthDay: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]),
    gender: new FormControl(0, [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^(091|090|\\(\\+84\\)90|\\(\\+84\\)91)\\d{7}$')]),
    address: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    customerType: new FormControl('', [Validators.required]),
    status: new FormControl(1)
  });

  compareByObjectId(itemOne, itemTwo) {
    // tslint:disable-next-line:triple-equals
    return itemOne && itemTwo && itemOne.id == itemTwo.id;
  }

  ngOnInit(): void {
    this.getAllCustomerTypes();
    const customerIdFromRoute = Number(this.activatedRoute.snapshot.params.id);
    this.customerService.findByIdApi(customerIdFromRoute).subscribe(value => {
      console.log('okee')
      console.log(value)
      if (value === undefined) {
        this.route.navigate(['/error']);
      }
      this.customerForm.patchValue(value);
    });

  }

  getAllCustomerTypes() {
    this.customerService.getCustomerTypeListApi().subscribe(value => {
      this.customerTypeList = value
      console.log(this.customerTypeList)
    }, error => {
      console.log('error at getting cusType');
    })
  }

  onSubmit(customerForm: FormGroup) {
    console.log(customerForm.value);
    this.customer = this.customerForm.value;
    this.findCustomerTypeById(this.customer.customerType.id);
    this.customerService.getCustomerList()
    this.toastr.success("Edit customer successfully!")

  }

  findCustomerTypeById(id: number) {
    this.customerTypeService.findById(id).subscribe(value => {
      this.customer.customerType.name = value.name;
      this.updateCustomerType();
    });
  }

  updateCustomerType() {
    this.customerService.updateCustomerApi(this.customer.id, this.customer).subscribe(() => {
      this.route.navigate(['/customer']);
    }, e => {
      console.log('error at updateCustomerType');
    });
  }
}
