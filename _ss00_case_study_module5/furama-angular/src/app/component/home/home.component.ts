import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  serviceCard1 = '/assets/img/service1.jpg';
  serviceCard2 = '/assets/img/service2.jpg';
  serviceCard3 = '/assets/img/service3.jpg';
  serviceCard4 = '/assets/img/service4.jpg';
  contentImage1 = '/assets/img/home-content-pool.jpg';
  contentImage2 = '/assets/img/home-content-food.jpg';
  contentImage3 = '/assets/img/home-content-gym.jpg';
  contentImage4 = '/assets/img/home-content-child.jpg';
  contentImage5 = '/assets/img/home-content-bar.jpg';

  logoHeader = '/assets/img/logo-furama.png';
  carouselCover1 = '/assets/img/caros3.jpg';
  carouselCover2 = '/assets/img/caros5.jpg';
  carouselCover3 = '/assets/img/caros6.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
