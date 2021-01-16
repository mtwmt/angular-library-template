import { TestBed } from '@angular/core/testing';

import { MandyLibService } from './mandy-lib.service';

describe('MandyLibService', () => {
  let service: MandyLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MandyLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
