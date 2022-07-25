import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CustomerService} from "../../../services/customer.service";
import {CustomerTypeService} from "../../../services/customer-type.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../../models/customer-type";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  constructor(private router: Router,
              private customerService: CustomerService,
              private customerTypeService: CustomerTypeService) {
  }

  customerTypeList: CustomerType [];

  customer = {
    id          : '',
    name        : '',
    birthday    : '',
    gender      : '',
    idCard      : '',
    phoneNumber : '',
    email       : '',
    address     : '',
    customerType: null
  };
  customerForm: FormGroup;


  ngOnInit(): void {
    this.getAllCustomerTypes();
    this.customerForm = new FormGroup({
      id        : new FormControl(this.customer.id, [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
      name        : new FormControl(this.customer.name, [Validators.required]),
      birthday  : new FormControl(this.customer.birthday, [Validators.required, Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]),
      gender      : new FormControl(this.customer.gender, [Validators.required]),
      idCard  : new FormControl(this.customer.idCard, [Validators.required, Validators.pattern('^\\d{9}$')]),
      phoneNumber       : new FormControl(this.customer.phoneNumber, [Validators.required, Validators.pattern('^(091|090|\\(\\+84\\)90|\\(\\+84\\)91)\\d{7}$')]),
      address     : new FormControl(this.customer.email, [Validators.required]),
      email        : new FormControl(this.customer.address, [Validators.required, Validators.email]),
      customerType: new FormControl(this.customer.customerType, [Validators.required]),
    });
  }

  getAllCustomerTypes(){
    this.customerTypeService.getCustomerTypeList().subscribe(value => {
      this.customerTypeList = value
      console.log(this.customerTypeList)
    }, error => {
      console.log('error at getting cusType')
    })
  }


  onSubmit(customerForm: FormGroup) {
    console.log(customerForm);
    this.customerService.saveCustomer(customerForm.value).subscribe(() => {
    }, e => console.log(e));
    this.router.navigateByUrl('/customer');
    alert('Tạo thành công');
  }

}
