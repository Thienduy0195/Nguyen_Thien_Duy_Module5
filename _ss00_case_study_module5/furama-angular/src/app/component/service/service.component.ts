import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {FacilityService} from "../../services/facility.service";
import {Service} from "../../models/service";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  service: Service;

  serviceList: Service [];

  carouselCover1 ='/assets/img/facility-cover-1.jpg';
  carouselCover2 ='/assets/img/facility-cover-2.jpg';

  constructor(private title: Title,
              private facilityService: FacilityService) {
    this.title.setTitle('Furama | Facility  ')
  }

  ngOnInit(): void {
    this.facilityService.getAllFacilities().subscribe(value => {
      this.serviceList = value;
    }, error => {
      console.log('error')
    })
  }

}
