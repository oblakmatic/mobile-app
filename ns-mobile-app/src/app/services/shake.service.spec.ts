import { TestBed } from '@angular/core/testing';

import { ShakeService } from './shake.service';

describe('ShakeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShakeService = TestBed.get(ShakeService);
    expect(service).toBeTruthy();
  });
});
