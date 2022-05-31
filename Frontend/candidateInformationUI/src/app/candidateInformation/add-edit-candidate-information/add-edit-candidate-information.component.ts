import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateInformationServiceService } from 'src/app/candidate-information-service.service';

@Component({
  selector: 'app-add-edit-candidate-information',
  templateUrl: './add-edit-candidate-information.component.html',
  styleUrls: ['./add-edit-candidate-information.component.css']
})
export class AddEditCandidateInformationComponent implements OnInit {
  candidateInformationList$!: Observable<any[]>;

  constructor(private service: CandidateInformationServiceService) { }

  ngOnInit(): void {
    this.id = this.candidate.id;
    this.firstName = this.candidate.firstName;
    this.lastName = this.candidate.lastName;
    this.emailAddress = this.candidate.emailAddress;
    this.address = this.candidate.address;
    this.country = this.candidate.country;
    this.candidateInformationList$ = this.service.getCandidateInformationList();
  }

  @Input() candidate:any
  id: number = 0;
  firstName = "";
  lastName = "";
  emailAddress = "";
  address = "";
  country = "";

  addCandidate() {
    var candidate = {
      firstName: this.firstName,
      lastName: this.lastName,
      emailAddress: this.emailAddress,
      address: this.address,
      country: this.country
    }
    this.service.addCandidateInformation(candidate).subscribe(res => {
      var closeModalButton = document.getElementById('add-edit-modal-close');
      if (closeModalButton) {
        closeModalButton.click();
      }

      var addSuccess = document.getElementById('add-success-alert');
      if (addSuccess) {
        addSuccess.style.display = "block";
      }

      setTimeout(function() {
        if (addSuccess) {
          addSuccess.style.display = "none"
        }
      },5000)
    })
  }

  updateCandidate() {
    var candidate = {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      emailAddress: this.emailAddress,
      address: this.address,
      country: this.country
    }
    var id: number = this.id;
    
    this.service.updateCandidateInformation(id,candidate).subscribe(res => {
      var closeModalButton = document.getElementById('add-edit-modal-close');
      if (closeModalButton) {
        closeModalButton.click();
      }

      var updateSuccess = document.getElementById('update-success-alert');
      if (updateSuccess) {
        updateSuccess.style.display = "block";
      }

      setTimeout(function() {
        if (updateSuccess) {
          updateSuccess.style.display = "none"
        }
      },5000)
    })
  }
}
