import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {CustomerService} from "../../services/customer.service";
import {Customer} from "../../models/customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer: Customer;

  customerList: Customer [];

  carouselCover1 = '/assets/img/customer-cover-1.jpg';
  carouselCover2 = '/assets/img/customer-cover-2.jpg';

  constructor(private title: Title,
              private customerService: CustomerService) {
    this.title.setTitle('Furama | Customer')
  }

  ngOnInit(): void {
    this.customerService.getCustomerList().subscribe(value => {
      this.customerList = value;
    }, error => {
      console.log('error')
    })
  }


}
