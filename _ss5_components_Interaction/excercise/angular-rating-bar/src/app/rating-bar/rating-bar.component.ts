import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IRatingUnit} from './irating-unit';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {

  @Input()
  max = 10;
  @Input()
  ratingValue = 5;
  @Input()
  showRatingValue = true;
  @Output()
  rateChange = new EventEmitter<number>();
  ratingUnit: IRatingUnit = new IRatingUnit();
  ratingUnits: Array<IRatingUnit> = [];


  constructor() {
  }

  calculate(max, ratingValue) {
    // this.ratingUnits = Array.from({length: max},
    //   (_, index) => ({
    //     value: index + 1,
    //     active: index < ratingValue
    //   }));
    for (let i = 0; i < max; i++) {
      this.ratingUnit = {
            value: i + 1,
            active: i < ratingValue
      };
      this.ratingUnits.push(this.ratingUnit);
    }
  }

  ngOnInit() {
    this.calculate(this.max, this.ratingValue);
  }

  select(index) {
    this.ratingValue = index + 1;
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
    this.rateChange.emit(this.ratingValue);
  }

  enter(index) {
    this.ratingUnits.forEach((item, idx) => item.active = idx <= index);
  }

  reset() {
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
  }

}
