import { TestBed, inject } from '@angular/core/testing';

import { FilterPipe as FilterService } from './filter.pipe';

describe('FilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterService]
    });
  });

  it('should be created', inject([FilterService], (service: FilterService) => {
    expect(service).toBeTruthy();
  }));
});
