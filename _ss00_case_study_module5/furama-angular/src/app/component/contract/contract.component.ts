import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ContractService} from "../../services/contract.service";
import {Contract} from "../../models/contract";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contract: Contract;

  contractList: Contract [];

  carouselCover1 = '/assets/img/contract-cover1.jpg';
  carouselCover2 = '/assets/img/contract-cover2.jpg';

  constructor(private title: Title,
              private contractService : ContractService) {
    this.title.setTitle('Furama | Contract')
  }

  ngOnInit(): void {
    this.contractService.getAllContracts().subscribe(value => {
      this.contractList = value;
    }, error => {
      console.log('error')
    })
  }

}
