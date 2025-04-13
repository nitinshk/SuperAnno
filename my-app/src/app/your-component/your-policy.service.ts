import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YourPolicyService {
  private apiUrl = '/api/policies'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  submitTransaction(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/submit', data);
  }
}