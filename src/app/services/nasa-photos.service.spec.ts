import { TestBed } from '@angular/core/testing';

import { NasaPhotosService } from './nasa-photos.service';

describe('NasaPhotosService', () => {
  let service: NasaPhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasaPhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
