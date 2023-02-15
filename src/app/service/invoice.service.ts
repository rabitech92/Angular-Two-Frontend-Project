import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from '../model/Invoice';




@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  
  private apiServerUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  public getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(`${this.apiServerUrl}/allInv`);
  }

  public addInvoice(invoice: Invoice): Observable<Invoice> {
    return this.http.post<Invoice>(
      `${this.apiServerUrl}/addInv`,
      invoice
    );
  }

  public updateInvoice(invoice: Invoice): Observable<Invoice> {
    return this.http.put<Invoice>(
      `${this.apiServerUrl}/updateInv`,
      invoice
    );
  }

  public deleteInvoice(id: number) {
    return this.http.delete(`${this.apiServerUrl}/deleteInv/${id}`);
  }
}
