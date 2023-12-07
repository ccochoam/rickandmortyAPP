import { TestBed } from '@angular/core/testing';

import { DashboardCharacterService } from './dashboard-character.service';

describe('DashboardCharacterService', () => {
  let service: DashboardCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
