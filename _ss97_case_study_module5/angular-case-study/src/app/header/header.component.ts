import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logoHeader = '/assets/img/logo-furama.png';

  constructor() {
  }

  ngOnInit(): void {
  }

}
