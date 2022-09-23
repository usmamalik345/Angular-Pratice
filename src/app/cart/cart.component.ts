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

  get(item: string) {
    console.log(item);
  }
  deletes(item: string) {
    // this.list.push({ id: this.list.length, name: item });
    // console.log(item);
  }
}

ngOnInit() {
  this.loadAllTodoList();
}

loadAllTodoList() {
  this.todos = this.todoService.getAllTodos();
}

onClickEditTodoDetail(id) {
  this.router.navigate(['/todo-detail'], {queryParams:{id:id}});
}

onClickAddTodo() {
  this.router.navigate(['/todo-detail']);
}

onClickTodoDelete(id) {
  this.todoService.deleteTodoDetail(id);
  this.loadAllTodoList();
}
}
