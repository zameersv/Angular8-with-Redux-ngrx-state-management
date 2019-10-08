import { Component, OnInit } from '@angular/core';
import { NewsSearchService } from '../service/news-search.service';
import { SearchResult, Hits } from '../models/search.models';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../reducers';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Author', 'Title', 'Comments'];
  dataSource: Hits[];
  searchResult: SearchResult;
  constructor(
    private store: Store<{ rootState: AppState }>) {
    this.store.select(state => state.rootState.searchResult)
      .subscribe(res => {
      this.searchResult = res;
      this.dataSource = res.hits;
      });
  }

  ngOnInit() {
  }

}
