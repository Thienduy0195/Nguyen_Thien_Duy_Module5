import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract-body',
  templateUrl: './contract-body.component.html',
  styleUrls: ['./contract-body.component.css']
})
export class ContractBodyComponent implements OnInit {

  carouselCover1 ='/assets/img/contract-cover1.jpg';
  carouselCover2 ='/assets/img/contract-cover2.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
