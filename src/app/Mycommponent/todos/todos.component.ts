import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todoList: any[] = [];
  namey = '';
  constructor() {}

  ngOnInit(): void {}

  Addtask(names: string) {
    this.todoList.push({ names: names });

    // console.warn(this.list);
  }

  delteTask(indexs: any) {
    this.todoList.splice(indexs, 1);
  }
}
