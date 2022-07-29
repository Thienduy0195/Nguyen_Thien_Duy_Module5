import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
})
export class ImageSliderComponent implements OnInit {
  imgIndex = 0;
  imgSrc: string;
  listImage = [
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=1',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=2',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=3',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=4',
  ];

  constructor() {
    this.imgSrc = this.listImage[0];
  }

  ngOnInit() {
  }


  previous() {
    if (this.imgIndex > 0) {
      this.imgIndex--;
    } else {
      this.imgIndex = this.listImage.length - 1;
    }
    this.imgSrc = this.listImage[this.imgIndex];
  }

  next() {
    if (this.imgIndex < this.listImage.length - 1) {
      this.imgIndex++;
    } else {
      this.imgIndex = 0;
    }
    this.imgSrc = this.listImage[this.imgIndex];
  }
}
