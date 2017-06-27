import { Injectable } from '@angular/core';

@Injectable()
export class SaveService {
  todos: any[] = [];
  settings: any;
  constructor() {
    if (!localStorage.getItem('settings')) localStorage.setItem('settings', '{"showCompleted": false, "colorScheme": "primary"}');
    this.settings = JSON.parse(localStorage.getItem('settings'));

    if (localStorage.getItem('todos')) {
      localStorage.getItem('todos').split(';').forEach(todo => {
        this.todos.push(JSON.parse(todo));
      });
    }
  }

  getTodos(): any[] {
    return this.todos;
  }

  addTodo(title: String) {
    const newTodo = {
      title: title,
      completed: false,
      id: Math.random().toString(16).slice(2),
      created: new Date()
    };

    this.todos.push(newTodo);
    if (localStorage.getItem('todos')) {
      localStorage.setItem('todos', localStorage.getItem('todos') + ';' + JSON.stringify(newTodo));
    } else {
      localStorage.setItem('todos', JSON.stringify(newTodo));
    }
  }

  completeTodo(todo_id) {
    this.todos.forEach(todo => {
      if (todo.id == todo_id) {
        todo.completed ? todo.completed = false : todo.completed = true;
      }
    });
    this.updateTodoList();
  }

  deleteTodo(todo_id) {
    this.todos.forEach(todo => {
      if (todo.id == todo_id) {
        this.todos.splice(this.todos.indexOf(todo), 1);
      }
    });
    this.updateTodoList();
  }

  updateTodoList() {
    let updatedTodos = '';
    this.todos.forEach((todo, index) => {
      if (index) {
        updatedTodos += ';' + JSON.stringify(todo);
      } else {
        updatedTodos += JSON.stringify(todo);
      }
    });
    localStorage.setItem('todos', updatedTodos);
  }

  getSettings() {
    return this.settings;
  }

  setSettings(key: string, value: any) {
    this.settings[key] = value;
    this.updateSettings();
  }

  updateSettings() {
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }



}
