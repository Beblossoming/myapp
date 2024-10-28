import { TestBed } from '@angular/core/testing';

import { FashionpostService } from './fashionpost.service';

describe('FashionpostService', () => {
  let service: FashionpostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FashionpostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
