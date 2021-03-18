import { TestBed } from '@angular/core/testing';

import { ContratoserviceService } from './contratoservice.service';

describe('ContratoserviceService', () => {
  let service: ContratoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
