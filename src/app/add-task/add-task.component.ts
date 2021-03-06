import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  @Input() settings;
  constructor() { }

  ngOnInit() {
  }

  onAddTodo(e) {
    this.addTodo.emit(e);
   }

}
