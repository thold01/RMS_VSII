import { TestBed } from '@angular/core/testing';

import { IconImageService } from './icon-image.service';

describe('IconImageService', () => {
  let service: IconImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
