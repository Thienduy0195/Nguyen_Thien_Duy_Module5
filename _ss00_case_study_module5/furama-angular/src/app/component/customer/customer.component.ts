import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {CustomerService} from "../../services/customer.service";
import {Customer} from "../../models/customer";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {
  name: string;
  id: number;
  code: string;
  customer: Customer;
  p: number = 1;
  totalPages = 0;
  pageNumber: number = 0;

  customerList: Customer [];

  carouselCover1 = '/assets/img/customer-cover-1.jpg';
  carouselCover2 = '/assets/img/customer-cover-2.jpg';

  constructor(private title: Title,
              private customerService: CustomerService,
              private  toastr: ToastrService) {
    this.title.setTitle('Furama | Customer')
  }

  ngOnInit(): void {
    this.toastr.show('Welcome to customer list!', 'CUSTOMER MANAGEMENT');
    // this.customerService.getCustomerList().subscribe(value => {
    //   this.customerList = value;
    // }, error => {
    //   console.log('error')
    // })
    this.getCustomerList();
  }

  //SPRING
  getCustomerList() {
    this.customerService.getCustomerListApi(this.pageNumber).subscribe(result => {
      console.log('here')
      console.log(result);
      console.log('HERE')
      //@ts-ignore
      this.customerList = result.content;
      // @ts-ignore
      this.totalPages = result.length;
      // @ts-ignore
      this.pageNumber = result.pageable.pageNumber;
    }, error => {
      this.customerList = [];
      console.log('error at get list spring!');
    });
  }

  // getCustomerList() {
  //   this.customerService.getCustomerList().subscribe(value => {
  //     this.customerList = value;
  //   }, error => {
  //     console.log('error')
  //   })
  // }

  deleteObject() {
    this.customerService.deleteCustomerApi(this.id).subscribe(value => {
      this.getCustomerList()
      this.toastr.success('Deleting customer successfully!')
      // this.getCustomerList();
    })
  }

  getObject(customer: Customer) {
    this.name = customer.name;
    this.id = customer.id;
    this.code = customer.customerCode;
    this.customer = customer;
    console.log(this.customer)
  }
}
