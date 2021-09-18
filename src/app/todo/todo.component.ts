import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { TodoItem } from '../Models/TodoItem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor() { }

  model = new Model();

  GetName(){
    return this.model.name;
  }
  GetItems(){
    return this.model.items;
  }

}
