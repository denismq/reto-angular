import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFailure } from './auth.actions';

export interface State {
  userName: string;
  error: string;
  isLoading: boolean;
}

export const initialState: State = {
  userName: '',
  error: '',
  isLoading: false,
};

export const loginReducer = createReducer(
  initialState,
  on(login, (state) => ({ ...state, isLoading: true })),
  on(loginSuccess, (state, { userName }) => ({
    ...state,
    userName,
    isLoading: false,
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  }))
);
