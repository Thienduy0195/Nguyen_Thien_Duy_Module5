import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  services: any = [
    {
      id: 1,
      name: 'Ocean Villa',
      area: 140,
      cost: 89,
      maxPeople: 4,
      serviceType: {
        id: 1,
        name: 'Villa'
      },
      roomStandard: '5 star',
      otherConvenient: 'Sea View',
      poolArea: 30,
      numberOfFloors: 3,
      rentType: {
        id: 3,
        name: 'year'
      },
      img: 'facility-1.jpg'
    },
    {
      id: 2,
      name: 'Rose Room',
      area: 40,
      cost: 32,
      maxPeople: 2,
      serviceType: {
        id: 3,
        name: 'Room'
      },
      freeService: 'Massage',
      rentType: {
        id: 1,
        name: 'day'
      },
      img: 'facility-2.jpg'
    },
    {
      id: 3,
      name: 'Western Villa',
      area: 90,
      cost: 59,
      maxPeople: 3,
      serviceType: {
        id: 1,
        name: 'Villa'
      },
      roomStandard: '5 star',
      otherConvenient: 'Forest',
      poolArea: 20,
      numberOfFloors: 3,
      rentType: {
        id: 1,
        name: 'day'
      },
      img: 'facility-3.jpg'
    },
    {
      id: 4,
      name: 'Western House',
      area: 45,
      cost: 39,
      maxPeople: 2,
      serviceType: {
        id: 2,
        name: 'House'
      },
      roomStandard: '4 star',
      otherConvenient: 'AC',
      numberOfFloors: 2,
      rentType: {
        id: 1,
        name: 'day'
      },
      img: 'facility-4.jpg'
    },
    {
      id: 5,
      name: 'Winter House',
      area: 40,
      cost: 42,
      maxPeople: 3,
      serviceType: {
        id: 2,
        name: 'House'
      },
      roomStandard: '4 star',
      otherConvenient: 'AC',
      numberOfFloors: 1,
      rentType: {
        id: 2,
        name: 'month'
      },
      img: 'facility-5.jpg'
    },
    {
      id: 6,
      name: 'Glorious Room',
      area: 40,
      cost: 25,
      maxPeople: 2,
      serviceType: {
        id: 3,
        name: 'Room'
      },
      freeService: 'Massage',
      rentType: {
        id: 1,
        name: 'day'
      },
      img: 'facility-6.jpg'
    }
  ];


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
