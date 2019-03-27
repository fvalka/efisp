import { TestBed } from '@angular/core/testing';

import { G1000ReaderService } from './g1000-reader.service';

describe('G1000ReaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: G1000ReaderService = TestBed.get(G1000ReaderService);
    expect(service).toBeTruthy();
  });
});
