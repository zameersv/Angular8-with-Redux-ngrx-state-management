import { Component, OnInit, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { searchAction } from '../actions/search.action';
import { AppState } from '../reducers';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string;

  constructor(private store: Store<{ rootState: AppState }>) {
  }

  search() {
    console.log('Search' + this.query);
    this.store.dispatch(searchAction({ query: this.query }));
  }

  ngOnInit() {
  }

}
