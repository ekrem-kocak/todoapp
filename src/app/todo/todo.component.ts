import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor() { }

  items = [
    { id: 1, description: "kahvaltı", action: true },
    { id: 2, description: "ders", action: false },
    { id: 3, description: "kitap okumak", action: true },
  ]

}
