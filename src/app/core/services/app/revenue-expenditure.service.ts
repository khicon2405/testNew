import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ConfigService } from '../configuration/configuration.service';

@Injectable({
  providedIn: 'root'
})
export class RevenueExpenditureService {
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

  // danh sách TKĐB thu hộ - chi hộ
  getRevenueExpenditureList(request, excel?): Observable<any> {
    const url = 'collection-account/get' + (excel ? '/excel-report' : '');
    if (excel) {
      delete request.page;
      delete request.pageSize;
      return this.http
        .post(`${this.baseUrl}/${url}`, request, { responseType: 'blob' })
        .pipe(catchError(this.errorHandler));
    }
    return this.http.post(`${this.baseUrl}/collection-account/get`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  // quyết toán
  settlement(): Observable<any> {
    return this.http.post(`${this.baseUrl}/collection-account/request`, {}).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  // báo cáo thu hộ chi hộ - thông tin đối tác
  getPartnerInfoReport(request): Observable<any> {
    return this.http.post(`${this.baseUrl}/payment-collect-behalf/partner-info`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  // báo cáo thu hộ chi hộ - tình hình giao dịch
  getTransactionInfoReport(request): Observable<any> {
    return this.http.post(`${this.baseUrl}/payment-collect-behalf/quarter-transaction-summary`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  // bắn ra lỗi
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.status);
  }
}
