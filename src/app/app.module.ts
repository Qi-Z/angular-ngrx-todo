import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo/todo-list-item/todo-list-item.component';
import {StoreModule} from '@ngrx/store';
import {TodoReducer} from './store/todo/todo.reducers';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      todos: TodoReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
