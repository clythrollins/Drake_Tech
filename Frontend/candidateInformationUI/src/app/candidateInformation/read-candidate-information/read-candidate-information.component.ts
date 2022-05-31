import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateInformationServiceService } from 'src/app/candidate-information-service.service';

@Component({
  selector: 'app-read-candidate-information',
  templateUrl: './read-candidate-information.component.html',
  styleUrls: ['./read-candidate-information.component.css']
})
export class ReadCandidateInformationComponent implements OnInit {
  candidateInformationList$!:Observable<any[]>;

  constructor(private service: CandidateInformationServiceService) { }

  ngOnInit(): void {
    this.candidateInformationList$ = this.service.getCandidateInformationList();
  }

  modalTitle:string = '';
  enableAddEditCandidateInformation:boolean = false;
  candidate:any;

  modalAdd() {
    this.candidate = {
      id: 0,
      firstName: null,
      lastName: null,
      emailAddress: null,
      address: null,
      country: null
    }
    this.modalTitle = "Add Candidate";
    this.enableAddEditCandidateInformation = true;
  }

  modalEdit(list: any) {
    this.candidate = list;
    this.modalTitle = "Edit Candidate";
    this.enableAddEditCandidateInformation = true;
  }

  modalClose() {
    this.enableAddEditCandidateInformation = false;
    this.candidateInformationList$ = this.service.getCandidateInformationList();
  }

  delete(list: any) {
    if(confirm(`Are you sure you want to delete candidate? ${list.firstName}`)) {
      this.service.deleteCandidateInformation(list.id).subscribe(res => {
        var closeModalButton = document.getElementById('add-edit-modal-close');
        if (closeModalButton) {
          closeModalButton.click();
        }

        var deleteSuccess = document.getElementById('delete-alert');
        if (deleteSuccess) {
          deleteSuccess.style.display = "block";
        }

        setTimeout(function() {
          if (deleteSuccess) {
            deleteSuccess.style.display = "none"
          }
        },5000)
        this.candidate = this.service.getCandidateInformationList();
        })
    }
  }

}