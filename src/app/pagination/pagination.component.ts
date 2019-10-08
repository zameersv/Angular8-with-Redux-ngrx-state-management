import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import {
  getNextSearchResultsAction,
  getPreviousSearchResultsAction
} from '../actions/search.action';
import { AppState } from '../reducers';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  currentPage: Observable<number> = this.store.select(store => store.rootState.searchResult.page);
  totalPages: Observable<number> = this.store.select(store => store.rootState.searchResult.nbPages);
  query: Observable<string> = this.store.select(store => store.rootState.searchResult.query);
  disableNext = true;
  disablePrev = true;

  constructor(private store: Store<{ rootState: AppState }>) { }

  next() {
    combineLatest(this.currentPage, this.totalPages, this.query).pipe(take(1))
      .subscribe(([pageNumVal, totalPagesVal, queryVal]) => {
        if (pageNumVal < totalPagesVal) {
          this.store.dispatch(getNextSearchResultsAction({ query: queryVal, pageNum: pageNumVal + 1 }));
        }
      });
  }

  previous() {
    combineLatest(this.currentPage, this.totalPages, this.query).pipe(take(1))
      .subscribe(([pageNumVal, totalPagesVal, queryVal]) => {
        if (pageNumVal != 0) {
          this.store.dispatch(getPreviousSearchResultsAction({ query: queryVal, pageNum: pageNumVal - 1 }));
        }

      });
  }

  disablePagination() {

  }

  ngOnInit() {
    combineLatest(this.currentPage, this.totalPages)
      .subscribe(([pageNumVal, totalPagesVal]) => {
        console.log('pagination');
        if ((pageNumVal === totalPagesVal - 1) || (totalPagesVal === 0)) {
          this.disableNext = true;
        } else {
          this.disableNext = false;
        }

        if (pageNumVal === 0 || totalPagesVal === 0) {
          this.disablePrev = true;
        } else {
          this.disablePrev = false;
        }

      });
  }

}
