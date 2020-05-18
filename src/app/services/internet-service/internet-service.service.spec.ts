import { TestBed } from '@angular/core/testing';

import { InternetServiceService } from './internet-service.service';

describe('InternetServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InternetServiceService = TestBed.get(InternetServiceService);
    expect(service).toBeTruthy();
  });
});
