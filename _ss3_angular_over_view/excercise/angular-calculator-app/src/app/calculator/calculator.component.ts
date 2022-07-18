import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  isShow = false;
  firstOperand = '';
  secondOperand = '';
  result = 0;
  operator = '';

  // @ts-ignore
  calculate(): string {
    if (this.operator === '+') {
      this.result = parseFloat(this.firstOperand) + parseFloat(this.secondOperand);
    }
    if (this.operator === '-') {
      this.result = parseFloat(this.firstOperand) - parseFloat(this.secondOperand);
    }
    if (this.operator === '/') {
      this.result = parseFloat(this.firstOperand) / parseFloat(this.secondOperand);
    }
    if (this.operator === '*') {
      this.result = parseFloat(this.firstOperand) * parseFloat(this.secondOperand);
    }
    this.isShow = true;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
