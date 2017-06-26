import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdInputModule,
  MdIconModule,
  MdToolbarModule,
  MdCardModule,
  MdSlideToggleModule,
  MdTooltipModule,
  MdDialogModule,
} from '@angular/material';
import 'hammerjs';

import { AppComponent, DialogOverviewExampleDialog } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoListComponent } from './todo-list/todo-list.component';


import { SaveService } from './_services/save.service';
import { CompletedPipe } from './_pipes/completed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TodoListComponent,
    CompletedPipe,
    DialogOverviewExampleDialog
  ],
  entryComponents: [DialogOverviewExampleDialog],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdInputModule,
    MdIconModule,
    MdToolbarModule,
    MdCardModule,
    MdSlideToggleModule,
    MdTooltipModule,
    MdDialogModule
  ],
  providers: [SaveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
