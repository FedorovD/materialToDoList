import { Component } from '@angular/core';

import { SaveService } from './_services/save.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: any = [];
  settings: any = {};

  constructor(private saveService: SaveService) {
    this.todos = this.saveService.getTodos();
    this.settings = this.saveService.getSettings() || false;
  }
  addTodo(title) {
    if (title.length) {
      this.saveService.addTodo(title);
      this.todos = this.saveService.getTodos();
    }
  }

  deleteTodo(todo_id) {
    this.saveService.deleteTodo(todo_id);
    this.todos = this.saveService.getTodos();
  }

  completeTodo(todo_id) {
    this.saveService.completeTodo(todo_id);
    this.todos = this.saveService.getTodos();
  }

  completeToogle(event) {
    this.saveService.setSettings('showCompleted', event);
  }
}
