import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { SaveService } from './_services/save.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: any = [];
  settings: any = {};


  constructor(private saveService: SaveService, public dialog: MdDialog) {
    this.todos = this.saveService.getTodos();
    this.settings = this.saveService.getSettings() || {};
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

  openDialog() {
    this.dialog.open(DialogOverviewExampleDialog, {
      height: '96px',
      width: '96px',
      position: { top: '0px', right: '0px' }
    });
  }

}


@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
  <md-grid-list cols="2" rowHeight="2:1">
  <md-grid-tile><button md-mini-fab class="blue-color_bg" (click)="changeTheme($event)" name="blue-color"></button></md-grid-tile>
  <md-grid-tile><button md-mini-fab class="purple-color_bg"  (click)="changeTheme($event)" name="purple-color"></button></md-grid-tile>
  <md-grid-tile><button md-mini-fab class="pink-color_bg" (click)="changeTheme($event)" name="pink-color"></button></md-grid-tile>
  <md-grid-tile><button md-mini-fab class="cyan-color_bg" (click)="changeTheme($event)" name="cyan-color"></button></md-grid-tile>
</md-grid-list>
  `
})
export class DialogOverviewExampleDialog {
  changeTheme(event) {

  }
}
