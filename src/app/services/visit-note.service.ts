import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitNoteService {

  private baseUrl = '/api/visit';

  constructor(private http: HttpClient) { }

  getVisit(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createVisit(visit: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/create`, visit);
  }

  updateVisit(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  getVisitList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
