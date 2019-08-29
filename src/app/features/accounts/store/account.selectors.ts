import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  accountEntityAdapter,
  accountFeatureKey,
  State
} from './account.state';

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = accountEntityAdapter.getSelectors();

export const selectAccountState = createFeatureSelector<State>(
  accountFeatureKey
);

export const selectAccountIds = createSelector(
  selectAccountState,
  selectIds
);

export const selectAccountEntities = createSelector(
  selectAccountState,
  selectEntities
);

export const selectAllAccounts = createSelector(
  selectAccountState,
  selectAll
);

export const selectAccountTotal = createSelector(
  selectAccountState,
  selectTotal
);
