import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ContractService} from "../../services/contract.service";
import {Contract} from "../../models/contract";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contract: Contract;
  id: number;
  serviceName: string;
  customerName: string;
  contractList: Contract [];

  carouselCover1 = '/assets/img/contract-cover2.jpg';
  carouselCover2 = '/assets/img/contract-cover1.jpg';

  constructor(private title: Title,
              private contractService: ContractService,
              private toastr: ToastrService) {
    this.title.setTitle('Furama | Contract')
  }

  ngOnInit(): void {
    this.getContractList()
    this.toastr.show('Welcome to contract list!', 'CONTRACT MANAGEMENT!')
  }

  getObject(contract: Contract) {
    this.customerName = contract.customer.name;
    this.serviceName = contract.service.name;
    this.id = contract.id;
    console.log(contract)
    console.log(this.id)
  }

  deleteObject() {
    this.contractService.deleteContractApi(this.id).subscribe(value => {
      this.toastr.success('Deleting contract successfully!')
      this.getContractList();
    })
  }

  //SPRING API
  getContractList() {
    this.contractService.getCustomerListApi().subscribe(value => {
      this.contractList = value;
      console.log(value)
      console.log(this.contractList)
    }, error => {
      console.log('error at contract api')
    })
  }

  //=====J-SON======
  // getContractList() {
  //   this.contractService.getAllContracts().subscribe(value => {
  //     this.contractList = value;
  //   }, error => {
  //     console.log('error')
  //   })
  // }


}
