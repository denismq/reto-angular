import { createSelector } from '@ngrx/store';

const selectLogin = (state: any) => state.login;

export const selectUserName = createSelector(
  selectLogin,
  (state) => state.userName
);

export const selectError = createSelector(selectLogin, (state) => state.error);

export const selectIsLoading = createSelector(
  selectLogin,
  (state) => state.isLoading
);
