import { TestBed } from '@angular/core/testing';

import { ProteccionGuardGuard } from './proteccion-guard.guard';

describe('ProteccionGuardGuard', () => {
  let guard: ProteccionGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProteccionGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
