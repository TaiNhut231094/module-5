import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  firstOperand: string;
  lastOperand: string;
  operator: string;
  result = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculator() {
    // tslint:disable-next-line:no-eval
    this.result = eval(this.firstOperand + this.operator + this.lastOperand);
  }
}
