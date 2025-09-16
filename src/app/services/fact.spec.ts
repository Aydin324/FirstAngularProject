import { TestBed } from '@angular/core/testing';

import { Fact } from './fact';

describe('Fact', () => {
  let service: Fact;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fact);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
