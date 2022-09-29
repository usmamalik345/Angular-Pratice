import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor() {}

  calcultorInput = '';

  ngOnInit(): void {}

  buttonpress(item: any) {
    this.calcultorInput = item;
  }
}
