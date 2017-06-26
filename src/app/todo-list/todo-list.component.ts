import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos;
  @Input() settings;
  @Output() deleteTodo: EventEmitter<any> = new EventEmitter();
  @Output() completeTodo: EventEmitter<any> = new EventEmitter();
  @Output() completeToogle: EventEmitter<any> = new EventEmitter();
  completedToogle: boolean;

  constructor() {
  }

  ngOnInit() {
    this.completedToogle = this.settings.showCompleted;
  }

  onDelete(todo_id) {
    this.deleteTodo.emit(todo_id);
  }

  onComplete(todo_id) {
    this.completeTodo.emit(todo_id);
  }
  onCompletedToogle(event) {
    this.completeToogle.emit(event.checked);
  }
}
