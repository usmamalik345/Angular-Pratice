import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor() {}

  item: string;

  calcultorInput: any = 0;

  ngOnInit(): void {}
 
  buttonpress(item: any) {
    if (item === '=') {
      this.calcultorInput = (0, eval)(this.calcultorInput);
    } 
     else {
      this.calcultorInput += item;
    }
  }

  clearall(item: any) {
    this.calcultorInput = '';
  }
}
