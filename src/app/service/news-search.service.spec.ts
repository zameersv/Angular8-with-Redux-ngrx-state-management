import { TestBed } from '@angular/core/testing';

import { NewsSearchService } from './news-search.service';

describe('NewsSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsSearchService = TestBed.get(NewsSearchService);
    expect(service).toBeTruthy();
  });
});
