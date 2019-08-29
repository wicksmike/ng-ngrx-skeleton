import { Action, createReducer, on } from '@ngrx/store';
import * as AccountActions from './account.actions';
import { accountEntityAdapter, initialState, State } from './account.state';

const accountReducer = createReducer(
  initialState,
  // Load Accounts
  on(AccountActions.loadAccounts, state => ({
    ...state,
    isLoading: true,
    error: null
  })),
  // Load Accounts Success
  on(AccountActions.loadAccountsSuccess, (state, { accounts }) =>
    accountEntityAdapter.addAll(accounts, {
      ...state,
      isLoading: false,
      error: null
    })
  ),
  // Load Accounts Failure
  on(AccountActions.loadAccountsFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return accountReducer(state, action);
}
