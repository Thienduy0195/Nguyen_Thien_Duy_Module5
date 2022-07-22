import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {

  logoHeader = '/assets/img/logo-furama.png';
  carouselCover1 = '/assets/img/caros3.jpg';
  carouselCover2 = '/assets/img/caros5.jpg';
  carouselCover3 = '/assets/img/caros6.jpg';


  constructor() {
  }

  ngOnInit(): void {
  }

}
