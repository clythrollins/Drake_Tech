import { TestBed } from '@angular/core/testing';

import { CandidateInformationServiceService } from './candidate-information-service.service';

describe('CandidateInformationServiceService', () => {
  let service: CandidateInformationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidateInformationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
