import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigService } from '../configuration/configuration.service';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  baseUrl = "";

  constructor(private http: HttpClient, private config: ConfigService) {
    this.baseUrl =
      this.config &&
        this.config.config &&
        this.config.config.API_ENDPOINTS &&
        this.config.config.API_ENDPOINTS.REAL_API_URL
        ? this.config.config.API_ENDPOINTS.REAL_API_URL
        : "";
  }

  getPartnerInfoReport(request): Observable<any> {
    return this.http.post(`${this.baseUrl}/bank_transfer/partner-info`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  getTransactionInfoReport(request): Observable<any> {
    return this.http.post(`${this.baseUrl}/bank_transfer/quarter-transaction-summary`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
}
