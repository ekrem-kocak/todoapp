import { TodoItem } from "./Models/TodoItem";

export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name = "Ekrem";
    this.items = [
      new TodoItem("kahvaltı", true),
      new TodoItem("okul", false),
      new TodoItem("okuma", true),
    ]
  }
}
