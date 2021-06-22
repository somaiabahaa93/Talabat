import { TestBed } from '@angular/core/testing';

import { CrudResturantService } from './crud-resturant.service';

describe('CrudResturantService', () => {
  let service: CrudResturantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudResturantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
