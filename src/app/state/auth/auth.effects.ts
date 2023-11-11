import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { login, loginSuccess, loginFailure } from './auth.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      exhaustMap(() =>
        this.authService.getUsers().pipe(
          map((user) => loginSuccess(user))
          //catchError((error) => loginFailure(error))
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
