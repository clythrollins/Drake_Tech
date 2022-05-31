import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CandidateInformationComponent } from './candidate-information/candidate-information.component';
import { ReadCandidateInformationComponent } from './candidateInformation/read-candidate-information/read-candidate-information.component';
import { AddEditCandidateInformationComponent } from './candidateInformation/add-edit-candidate-information/add-edit-candidate-information.component';
import { CandidateInformationServiceService } from './candidate-information-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CandidateInformationComponent,
    ReadCandidateInformationComponent,
    AddEditCandidateInformationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [CandidateInformationServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
