import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-sub-object',
  templateUrl: './sub-object.component.html',
  styleUrls: ['./sub-object.component.css']
})
export class SubObjectComponent implements OnInit {

  searchForm: FormGroup = new FormGroup({
    name: new FormControl()
  })

  constructor(private title : Title) {
    this.title.setTitle('Exam | Sub Object')
  }

  ngOnInit(): void {
  }

  searchName() {

  }
}
