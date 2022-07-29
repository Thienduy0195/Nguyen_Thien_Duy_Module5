import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CustomerService} from "../../../services/customer.service";
import {CustomerTypeService} from "../../../services/customer-type.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../../models/customer-type";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  constructor(private router: Router,
              private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private toastr: ToastrService) {
  }

  customerTypeList: CustomerType [];

  customer = {
    id          : 0,
    customerCode          : '',
    name        : '',
    birthDay    : '',
    gender      : 0,
    idCard      : '',
    phone : '',
    email       : '',
    address     : '',
    status     : 1,
    customerType: null
  };
  customerForm: FormGroup;


  ngOnInit(): void {
    this.getAllCustomerTypes();
    this.customerForm = new FormGroup({
      id        : new FormControl(this.customer.id),
      customerCode        : new FormControl(this.customer.customerCode, [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
      name        : new FormControl(this.customer.name, [Validators.required]),
      birthDay  : new FormControl(this.customer.birthDay, [Validators.required, Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]),
      gender      : new FormControl(this.customer.gender, [Validators.required]),
      idCard  : new FormControl(this.customer.idCard, [Validators.required, Validators.pattern('^\\d{9}$')]),
      phone       : new FormControl(this.customer.phone, [Validators.required, Validators.pattern('^(091|090|\\(\\+84\\)90|\\(\\+84\\)91)\\d{7}$')]),
      address     : new FormControl(this.customer.email, [Validators.required]),
      email        : new FormControl(this.customer.address, [Validators.required, Validators.email]),
      customerType: new FormControl(this.customer.customerType, [Validators.required]),
      status: new FormControl(1)
    });
  }

  // SPRING
  getAllCustomerTypes(){
    this.customerService.getCustomerTypeListApi().subscribe(value => {
      this.customerTypeList = value
      console.log(this.customerTypeList)
    }, error => {
      console.log('error at getting cusType')
    })
  }

  // getAllCustomerTypes(){
  //   this.customerTypeService.getCustomerTypeList().subscribe(value => {
  //     this.customerTypeList = value
  //     console.log(this.customerTypeList)
  //   }, error => {
  //     console.log('error at getting cusType')
  //   })
  // }


  onSubmit(customerForm: FormGroup) {
    console.log(customerForm);
    this.customer = customerForm.value;
    this.customer.customerType.id = Number(customerForm.value.customerType.id)
    this.customerService.saveCustomerApi(this.customer).subscribe(res => {
      this.toastr.success("Add new customer successfully!")
      this.router.navigateByUrl('/customer');
    }, e => {
      console.log('AB')
      console.log(e)
    });
    // this.toastr.error("KHONG THANH CONGG!!")
    // this.router.navigateByUrl('/customer');
  }

}
