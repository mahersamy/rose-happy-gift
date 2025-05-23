import { TestBed } from '@angular/core/testing';

import { MainAdapterService } from './main-adapter.service';

describe('MainAdapterService', () => {
  let service: MainAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
