import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { CartComponent } from './cart/cart.component';

import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './Mycommponent/todos/todos.component';
import { TodoFComponent } from './Mycommponent/todo-f/todo-f.component';
import { TdInputComponent } from './Mycommponent/td-input/td-input.component';

const appRouters: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'todo-f', component: TodoFComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    TodoComponent,
    TodosComponent,
    TodoFComponent,
    TdInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRouters),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
