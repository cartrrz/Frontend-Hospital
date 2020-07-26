import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecialityService {

  private baseUrl = '/api/speciality';

  constructor(private http: HttpClient) { }

  getSpeciality(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createSpeciality(speciality: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/create`, speciality);
  }

  updateSpeciality(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  getSpecialityList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
