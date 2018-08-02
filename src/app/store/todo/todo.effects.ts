// In ngrx, listen for actions and execute new actions based on them is done by effects

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from './todo.reducers';
import * as TodoActions from './todo.action';
import {mergeMap} from 'rxjs/operators';

@Injectable()
export class TodoEffects {
  // 'Actions' is a type in effects package
  constructor(private http: HttpClient, private actions$: Actions) {

  }

  // @Effect()
  // GetTodo$: Observable<Action> = this.actions$.pipe(ofType(TodoActions.GET_TODOS))
  //   .pipe(mergeMap(action => ))
}
