import { TestBed } from '@angular/core/testing';

import { BaseurlbackendService } from './baseurlbackend.service';

describe('BaseurlbackendService', () => {
  let service: BaseurlbackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseurlbackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
