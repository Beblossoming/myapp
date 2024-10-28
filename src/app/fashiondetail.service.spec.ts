import { TestBed } from '@angular/core/testing';

import { FashiondetailService } from './fashiondetail.service';

describe('FashiondetailService', () => {
  let service: FashiondetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FashiondetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
