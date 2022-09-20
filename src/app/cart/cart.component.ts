import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  anyproduct = 'india';
  country: string;
  constructor() {}

  ngOnInit(): void {}
  selectproduct(country: string) {
    this.anyproduct = country;
  }
}
