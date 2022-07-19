import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-new',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  logo: 'https://cafedev.vn/wp-content/uploads/2019/12/cafedev_javascript.png';

  constructor() { }

  ngOnInit(): void {
  }

}
