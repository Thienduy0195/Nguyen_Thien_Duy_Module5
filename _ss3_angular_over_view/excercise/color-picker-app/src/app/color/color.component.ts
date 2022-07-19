import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  firstColor = 'green';
  secondColor = 'color: black';
  thirdColor = 'blue';

  constructor() {
  }

  ngOnInit(): void {
  }

}
