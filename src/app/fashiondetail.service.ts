import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FashiondetailService {
  private apiUrl = 'http://localhost:3002/fashions'; // Your API base URL

  constructor(private http: HttpClient) { }

  getFashionById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
