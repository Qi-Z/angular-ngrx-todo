import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {TodoListState} from './store/todo/todo.state';
import {select, Store} from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';
  todos$: Observable<TodoListState>;
  constructor(private store: Store<TodoListState>) {
    this.todos$ = this.store.pipe(select('todos'));
  }
}
