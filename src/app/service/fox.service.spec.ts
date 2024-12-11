import { TestBed } from '@angular/core/testing';

import { FoxService } from './fox.service';

describe('FoxService', () => {
  let service: FoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
