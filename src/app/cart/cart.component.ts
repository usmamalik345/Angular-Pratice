import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  list: any[] = [];
  tasks_name = '';
  selectedStatus = 'all';

  constructor() {}

  ngOnInit(): void {}

  addto(name: string) {
    this.list.push({ id: this.list.length, name: name, completed: false });
    this.tasks_name = '';
    // console.warn(this.list);
  }

  pending(item: string) {}
  completed(item: string) {
    // this.list.push({ id: this.list.length, name: item });
    // console.log(item);
  }

  deleteItemEvent(index: any) {
    this.list.splice(index, 1);
  }
}
