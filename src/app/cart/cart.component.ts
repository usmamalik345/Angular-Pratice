import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  anytask: any;

  list: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  addto(item: string) {
    this.list.push({ id: this.list.length, name: item });
    console.warn(this.list);

   
  }

 
}
