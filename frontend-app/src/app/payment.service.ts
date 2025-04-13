
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = 'http://127.0.0.1:8000/api/payments/';  // Endpoint del backend

  constructor(private http: HttpClient) {}

  getPayments(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createPayment(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}