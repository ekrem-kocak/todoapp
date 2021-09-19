import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { TodoItem } from '../Models/TodoItem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor() {
    this.model.items = this.GetItemsFromLS();
  }

  displayAll: boolean = false;

  model = new Model();

  inputText: string = "";
  message: string;

  AddItem() {
    if (this.inputText != "") {
      let data = new TodoItem(this.inputText, false);
      this.model.items.push(data);

      let items = this.GetItemsFromLS();
      items.push(data);

      localStorage.setItem('items', JSON.stringify(items));
      this.inputText = '';
    } else {
      alert("bilgi giriniz");
    }
  }
  DeleteItem(desc: string) {
    var item = this.model.items.find(i => i.description == desc);
    if (item != null) {
      this.model.items.splice(this.model.items.indexOf(item), 1);
    }
  }

  OnActionChanged(item: TodoItem) {
    let items = this.GetItemsFromLS();
    localStorage.clear();

    items.forEach(i => {
      if (i.description == item.description) {
        i.action = item.action;
      }
    });
    localStorage.setItem('items', JSON.stringify(items));
  }
  GetName() {
    return this.model.name;
  }
  GetItems() {
    if (this.displayAll) {
      return this.model.items;
    } else {
      return this.model.items.filter(i => i.action === false);
    }
  }
  GetItemsFromLS() {
    let items: TodoItem[] = [];
    let data = localStorage.getItem('items');
    if (data != null) {
      items = JSON.parse(data);
    }
    return items;
  }
  DisplayCompletedCount() {
    return this.model.items.filter(i => i.action).length;
  }

}
