import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css']
})
export class HomeBodyComponent implements OnInit {

  serviceCard1 ='/assets/img/service1.jpg';
  serviceCard2 ='/assets/img/service2.jpg';
  serviceCard3 ='/assets/img/service3.jpg';
  serviceCard4 ='/assets/img/service4.jpg';
  contentImage1 ='/assets/img/home-content-pool.jpg';
  contentImage2 ='/assets/img/home-content-food.jpg';
  contentImage3 ='/assets/img/home-content-gym.jpg';
  contentImage4 ='/assets/img/home-content-child.jpg';
  contentImage5 ='/assets/img/home-content-bar.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
