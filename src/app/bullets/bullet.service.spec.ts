import { TestBed, inject } from '@angular/core/testing';

import { BulletService } from './bullet.service';

describe('BulletService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BulletService]
    });
  });

  it('should be created', inject([BulletService], (service: BulletService) => {
    expect(service).toBeTruthy();
  }));
});
