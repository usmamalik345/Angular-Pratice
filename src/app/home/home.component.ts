import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  selectProduct: string;
  productselect: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onselect(product: string) {
    this.productselect = true;
    this.selectProduct = product;
  }
}
