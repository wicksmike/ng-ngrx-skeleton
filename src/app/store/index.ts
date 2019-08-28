import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAccount from '../accounts/store/account.reducer';

export interface State {
  [fromAccount.accountFeatureKey]: fromAccount.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromAccount.accountFeatureKey]: fromAccount.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
