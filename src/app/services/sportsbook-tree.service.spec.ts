import { TestBed } from '@angular/core/testing';

import { SportsbookTreeService } from './sportsbook-tree.service';

describe('SportsbookTreeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SportsbookTreeService = TestBed.get(SportsbookTreeService);
    expect(service).toBeTruthy();
  });
});
