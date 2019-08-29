import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AccountsService } from '../accounts.service';
import * as AccountActions from './account.actions';

@Injectable()
export class AccountEffects {
  constructor(
    private actions$: Actions,
    private accountService: AccountsService
  ) {}

  loadAccounts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.loadAccounts),
      mergeMap(() =>
        this.accountService.getAccounts().pipe(
          map(accounts => AccountActions.loadAccountsSuccess({ accounts })),
          catchError(error => of(AccountActions.loadAccountsFailure({ error })))
        )
      )
    )
  );
}
