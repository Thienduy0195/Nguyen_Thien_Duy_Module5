import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../../../services/customer.service";
import {CustomerTypeService} from "../../../services/customer-type.service";
import {Customer} from "../../../models/customer";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../../models/customer-type";

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
              private customerTypeService: CustomerTypeService) {
  }

  customer: Customer | undefined;
  customerForm: FormGroup;

  compareByID(itemOne, itemTwo) {
    // tslint:disable-next-line:triple-equals
    return itemOne && itemTwo && itemOne.id == itemTwo.id;
  }

  ngOnInit(): void {
    this.getAllCustomerTypes();
    const customerIdFromRoute =  this.activatedRoute.snapshot.params.id;
    this.customerService.findById(customerIdFromRoute).subscribe(value => {
      if ( value === undefined) {
        this.route.navigate(['/error']);
      }
      console.log('abc')
      console.log(value)
      console.log(customerIdFromRoute)
      this.customerForm = new FormGroup({
        id: new FormControl(customerIdFromRoute, [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
        name: new FormControl(value.name, [Validators.required]),
        birthday: new FormControl(value.birthday, [Validators.required, Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]),
        gender: new FormControl(value.gender, [Validators.required]),
        idCard: new FormControl(value.idCard, [Validators.required, Validators.pattern('^\\d{9}$')]),
        phoneNumber: new FormControl(value.phoneNumber, [Validators.required, Validators.pattern('^(091|090|\\(\\+84\\)90|\\(\\+84\\)91)\\d{7}$')]),
        address: new FormControl(value.email, [Validators.required]),
        email: new FormControl(value.address, [Validators.required, Validators.email]),
        customerType: new FormControl(value.customerType, [Validators.required]),
      });
    });

  }

  getAllCustomerTypes() {
    this.customerTypeService.getCustomerTypeList().subscribe(value => {
      this.customerTypeList = value
      console.log(this.customerTypeList)
    }, error => {
      console.log('error at getting cusType')
    })
  }

  onSubmit(customerForm: FormGroup) {
    console.log(customerForm.value);
    // this.customerService.updateCustomerToObjectTs(customerForm.value);
    this.route.navigate(['/customer']);
  }
}
