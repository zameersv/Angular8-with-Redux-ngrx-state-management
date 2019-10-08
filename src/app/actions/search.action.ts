import {createAction, props} from '@ngrx/store';
import { SearchResult } from '../models/search.models';

export const searchAction = createAction(
    '[Search Component] Search',
    props<{ query: string}>()
);

export const getNextSearchResultsAction = createAction(
    '[Search Component] Search next',
    props<{ query: string,
        pageNum: number}>()
);

export const getPreviousSearchResultsAction = createAction(
    '[Search Component] Search previous',
    props<{ query: string,
        pageNum: number}>()
);

export const searchSuccess = createAction(
    '[Search Component] Search Success',
    props<SearchResult>()
);
