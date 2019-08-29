import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Account } from './account.model';

export const accountFeatureKey = 'account';

export const accountEntityAdapter: EntityAdapter<Account> = createEntityAdapter<
  Account
>({
  selectId: model => model.id,
  sortComparer: (a: Account, b: Account): number => a.name.localeCompare(b.name)
});

export interface State extends EntityState<Account> {
  // additional entity state properties
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = accountEntityAdapter.getInitialState({
  isLoading: false,
  error: null
});
