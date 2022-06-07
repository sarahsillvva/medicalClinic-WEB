import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from '../_models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  listerPatient(): Observable<any>{
   return this.http.get(`${environment.URL_API}/patient/allPatient`, {observe: 'response'})
  }

  searchId(patientId:string):Observable<any>{
    return this.http.get(`${environment.URL_API}/patient/searchById`,{
      params:{
        id: patientId
      }, observe:'response'
    } );
  }

  registerPatient(body: Patient): Observable<any>{
    return this.http.post(`${environment.URL_API}/patient`,body, {observe: 'response'});
  }

  updatePatient(body: Patient): Observable<any>{
    return this.http.put(`${environment.URL_API}/patient`,body, {observe: 'response'});
  }

  deletePatient(patientId:string): Observable<any>{
    return this.http.delete(`${environment.URL_API}/patient`,{
      params:{
        id: patientId
      }, observe:'response'
    } );
  }
}
