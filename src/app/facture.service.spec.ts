import { TestBed } from '@angular/core/testing';

import { factureService } from './facture.service';

describe('FactureService', () => {
  let service: factureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(factureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
