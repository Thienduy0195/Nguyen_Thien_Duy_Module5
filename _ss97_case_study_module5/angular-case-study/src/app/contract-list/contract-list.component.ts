import {Component, OnInit} from '@angular/core';
import {Contract} from "../interface/contract";
import {ContractService} from "../services/contract.service";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  contracts: Contract[];

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.getList()
  }

  getList() {
    this.contractService.getContracts().subscribe(
      res => {
        this.contracts = res
        console.log(res)
      },
      err => console.log(err)
    );
  }
}
