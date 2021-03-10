import { TestBed } from '@angular/core/testing';

import { AlianzafServiceService } from './alianzaf-service.service';

describe('AlianzafServiceService', () => {
  let service: AlianzafServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlianzafServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
