import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateInformationServiceService {
  readonly candidateInformationURL = "https://localhost:7185/swagger/api";

  constructor(private http:HttpClient) { }

  getCandidateInformationList():Observable<any[]> {
    return this.http.get<any>(this.candidateInformationURL + '/CandidateInformations');
  }

  addCandidateInformation(data:any) {
    return this.http.post(this.candidateInformationURL + '/CandidateInformations', data);
  }

  updateCandidateInformation(id:number | string, data:any) {
    return this.http.put(this.candidateInformationURL + `/CandidateInformations/${id}`, data);
  }

  deleteCandidateInformation(id:number) {
    return this.http.delete(this.candidateInformationURL + `/CandidateInformations/${id}`);
  }
}