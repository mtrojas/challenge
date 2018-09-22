import { TestBed, inject } from '@angular/core/testing';

import { SbifService } from './sbif.service';

describe('SbifService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SbifService]
    });
  });

  it('should be created', inject([SbifService], (service: SbifService) => {
    expect(service).toBeTruthy();
  }));
});
