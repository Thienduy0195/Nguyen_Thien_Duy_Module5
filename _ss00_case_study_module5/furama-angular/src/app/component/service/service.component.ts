import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {FacilityService} from "../../services/facility.service";
import {Service} from "../../models/service";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  service: Service;

  serviceList: Service [];

  searchForm: FormGroup = new FormGroup({
    name: new FormControl()
  })

  carouselCover1 = '/assets/img/facility-cover-1.jpg';
  carouselCover2 = '/assets/img/facility-cover-2.jpg';

  constructor(private title: Title,
              private facilityService: FacilityService,
              private toastr: ToastrService) {
    this.title.setTitle('Furama | Facility  ')
    this.toastr.show('Welcome to facility list!', 'FACILITY MANAGEMENT');
  }

  ngOnInit(): void {
    this.facilityService.getAllFacilities().subscribe(value => {
      this.serviceList = value;
    }, error => {
      console.log('error')
    })
  }

  searchName() {
    alert(this.searchForm.value.name)
  }
}
