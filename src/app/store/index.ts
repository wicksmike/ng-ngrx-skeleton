import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as AccountReducer from '../features/accounts/store/account.reducer';
import * as AccountState from '../features/accounts/store/account.state';

export interface AppState {
  [AccountState.accountFeatureKey]: AccountState.State;
}

export const reducers: ActionReducerMap<AppState> = {
  [AccountState.accountFeatureKey]: AccountReducer.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
