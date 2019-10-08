import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import {
  catchError, exhaustMap, map,
  tap, concatMap, withLatestFrom
} from 'rxjs/operators';
import {
  searchAction,
  getNextSearchResultsAction,
  getPreviousSearchResultsAction,
  searchSuccess
} from '../actions/search.action';
import { NewsSearchService } from '../service/news-search.service';


@Injectable()
export class AppEffects {

  constructor(
    private actions$: Actions,
    private newsSearchServie: NewsSearchService
  ) { }

  search$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchAction),
      exhaustMap(action =>
        this.newsSearchServie.doNewsSearch(action.query).pipe(
          map(searchResult => searchSuccess(searchResult)),
          catchError(error => EMPTY)
        )
      )
    )
  );

  next$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getNextSearchResultsAction, getPreviousSearchResultsAction),
      exhaustMap(action =>
        this.newsSearchServie.doNewsSearch(action.query, action.pageNum).pipe(
          map(searchResult => searchSuccess(searchResult)),
          catchError(error => EMPTY)
        )
      )
    )
  );

}
