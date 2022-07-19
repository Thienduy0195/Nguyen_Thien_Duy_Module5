import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-body',
  templateUrl: './customer-body.component.html',
  styleUrls: ['./customer-body.component.css']
})
export class CustomerBodyComponent implements OnInit {

  carouselCover1 ='/assets/img/customer-cover-1.jpg';
  carouselCover2 ='/assets/img/customer-cover-2.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
