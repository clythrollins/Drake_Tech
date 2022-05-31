import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadCandidateInformationComponent } from './read-candidate-information.component';

describe('ReadCandidateInformationComponent', () => {
  let component: ReadCandidateInformationComponent;
  let fixture: ComponentFixture<ReadCandidateInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadCandidateInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadCandidateInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
