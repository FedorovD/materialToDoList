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
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      height: '96px',
      width: '96px',
      position: { top: '0px', right: '0px' }
    });

    dialogRef.afterClosed().subscribe(color => {
      this.saveService.setSettings('colorScheme', color);
    });


  }

}


@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
  <md-grid-list cols="2" rowHeight="2:1">
  <md-grid-tile><button md-mini-fab color="primary" md-dialog-close="primary"></button></md-grid-tile>
  <md-grid-tile><button md-mini-fab color="accent"  md-dialog-close="accent"></button></md-grid-tile>
  <md-grid-tile><button md-mini-fab color="warn" md-dialog-close="warn"></button></md-grid-tile>
  <md-grid-tile><button md-mini-fab color="dark" md-dialog-close></button></md-grid-tile>
</md-grid-list>
  `
})
export class DialogOverviewExampleDialog {
}
