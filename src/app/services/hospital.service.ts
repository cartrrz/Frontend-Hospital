import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  private baseUrl = '/api/hospital';

  constructor(private http: HttpClient) { }

  getHospital(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createHospital(hospital: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/create`, hospital);
  }

  updateHospital(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  getHospitalList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
