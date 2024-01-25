import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { passwordGuardGuard } from './password-guard.guard';

describe('passwordGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => passwordGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
