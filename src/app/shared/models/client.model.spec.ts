import { TestBed, inject } from '@angular/core/testing';

import { ClientModel } from './client.model';

describe('ClientModel', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientModel]
    });
  });

  it('should ...', inject([ClientModel], (service: ClientModel) => {
    expect(service).toBeTruthy();
  }));
});
