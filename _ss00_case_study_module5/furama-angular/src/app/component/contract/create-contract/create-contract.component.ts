import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../models/customer";
import {Service} from "../../../models/service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityService} from "../../../services/facility.service";
import {CustomerService} from "../../../services/customer.service";
import {ContractService} from "../../../services/contract.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {

  customers: Customer[];
  services: Service[];
  contractForm: FormGroup;

  constructor(private facilityService: FacilityService,
              private customerService: CustomerService,
              private contractService: ContractService,
              private route: Router) {
    customerService.getCustomerList().subscribe(value => {
      this.customers = value;
    })
    ;
    this.facilityService.getAllFacilities().subscribe(value => {
      this.services = value;
    }, error => {
      console.log('error at get services')
    })
  }

  ngOnInit(): void {
    this.contractForm = new FormGroup({
      id: new FormControl(''),
      customer: new FormControl(null, [Validators.required]),
      service: new FormControl(null, [Validators.required]),
      startDate: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]),
      endDate: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]),
      deposit: new FormControl('', [Validators.required, Validators.min(0)])
    });
  }

  onSubmit() {
    this.contractService.saveContract(this.contractForm.value);
    console.log(this.contractForm.value)
    alert('success')
    this.route.navigate(['/contract']);
  }
}
