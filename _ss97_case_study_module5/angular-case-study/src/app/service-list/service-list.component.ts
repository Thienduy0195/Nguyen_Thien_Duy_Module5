import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {


  service1 ='/assets/img/facility-1.jpg';
  service2 ='/assets/img/facility-2.jpg';
  service3 ='/assets/img/facility-3.jpg';
  service4 ='/assets/img/facility-4.jpg';
  service5 ='/assets/img/facility-5.jpg';
  service6 ='/assets/img/facility-6.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
