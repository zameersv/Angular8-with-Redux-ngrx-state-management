import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResult } from '../models/search.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsSearchService {
  searchURL = 'https://hn.algolia.com/api/v1/search';

  constructor(private http: HttpClient) { }

  doNewsSearch(query: string = 'auto and general', pageNum: number = 0): Observable<SearchResult> {
    const params = new HttpParams()
      .set('query', query)
      .set('page', pageNum.toString());
    return this.http.get<SearchResult>(this.searchURL, { params });
  }
}
