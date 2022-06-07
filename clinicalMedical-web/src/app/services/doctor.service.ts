import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Doctor } from '../_models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  listerdoctor(): Observable<any>{
    return this.http.get(`${environment.URL_API}/doctor/allDoctors`, {observe: 'response'})
   }
 
   searchId(doctorId:string):Observable<any>{
     return this.http.get(`${environment.URL_API}/doctor/searchById`,{
       params:{
         id: doctorId
       }, observe:'response'
     } );
   }
 
   registerdoctor(body: Doctor): Observable<any>{
     return this.http.post(`${environment.URL_API}/doctor`,body, {observe: 'response'});
   }
 
   updatedoctor(body: Doctor): Observable<any>{
     return this.http.put(`${environment.URL_API}/doctor`,body, {observe: 'response'});
   }
 
   deletedoctor(doctorId:string): Observable<any>{
     return this.http.delete(`${environment.URL_API}/doctor`,{
       params:{
         id: doctorId
       }, observe:'response'
     } );
   }
}
