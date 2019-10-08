import { Action, createReducer, on } from '@ngrx/store';
import { searchAction, searchSuccess } from '../actions/search.action';
import { SearchResult } from '../models/search.models';

export interface AppState {
  searchResult: SearchResult;
}

export const initialState: AppState = {
  searchResult: {
    nbHits: 0,
    nbPages: 0,
    page: 0,
    query: '',
    hits: []
  }
};

const searchReducer = createReducer(
  initialState,
  on(searchAction, state => state),
  on(searchSuccess, (state, searchResult: SearchResult) => {
    return ({ ...state, searchResult });
  }),
);

export function reducer(state: AppState, action: Action) {
  return searchReducer(state, action);
}
