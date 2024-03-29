import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {CompanyService} from "../../services/company.service";
import {Company} from "../../models/Company";

@Component({
  selector: 'app-sub-object',
  templateUrl: './sub-object.component.html',
  styleUrls: ['./sub-object.component.css']
})
export class SubObjectComponent implements OnInit {

  page = 1;
  companyList: Company [];
  searchForm: FormGroup = new FormGroup({
    name: new FormControl()
  })
  pageNumber: number = 0;
  totalPages: number = 1;

  constructor(private title: Title,
              private companyService: CompanyService) {
    this.title.setTitle('Exam | Sub Object')
  }

  ngOnInit(): void {
    this.getCompanyList();
  }

  searchName() {

  }

  getCompanyList() {
    this.companyService.getAllCompanyApi().subscribe((value:any) => {
      this.companyList = value.content;
      this.totalPages = value.length;
    })
  }

  getObject(company: Company) {

  }
}
