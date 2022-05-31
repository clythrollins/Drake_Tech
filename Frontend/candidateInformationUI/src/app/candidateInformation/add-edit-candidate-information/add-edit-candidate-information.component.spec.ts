import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCandidateInformationComponent } from './add-edit-candidate-information.component';

describe('AddEditCandidateInformationComponent', () => {
  let component: AddEditCandidateInformationComponent;
  let fixture: ComponentFixture<AddEditCandidateInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCandidateInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCandidateInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
