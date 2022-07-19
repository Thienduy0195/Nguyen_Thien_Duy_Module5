import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-body',
  templateUrl: './service-body.component.html',
  styleUrls: ['./service-body.component.css']
})
export class ServiceBodyComponent implements OnInit {

  carouselCover1 ='/assets/img/facility-cover-1.jpg';
  carouselCover2 ='/assets/img/facility-cover-2.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
