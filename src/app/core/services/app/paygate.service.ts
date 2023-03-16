import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ConfigService } from '../configuration/configuration.service';

@Injectable({
  providedIn: 'root'
})
export class PaygateService {
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

  // giao dịch cổng thanh toán
  getPaygateTransaction(request, excel?): Observable<any> {
    const url = 'payment-gw/trans/get' + (excel ? '/excel-report' : '');
    if (excel) {
      delete request.page;
      delete request.pageSize;
      return this.http
        .post(`${this.baseUrl}/${url}`, request, { responseType: 'blob' })
        .pipe(catchError(this.errorHandler));
    }
    return this.http.post(`${this.baseUrl}/${url}`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  // chi tiết GD CTT
  getDetailPaygateTransaction(request): Observable<any> {
    return this.http.post(`${this.baseUrl}/payment-gw/trans/detail`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  // báo cáo CTT - thông tin đối tác
  getPartnerInfoReport(request): Observable<any> {
    return this.http.post(`${this.baseUrl}/payment-gw/partner-info`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  // báo cáo CTT - tình hình giao dịch (bảng 1)
  getTransactionInfoReport(request): Observable<any> {
    return this.http.post(`${this.baseUrl}/payment-gw/quarter-transaction-summary`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  // báo cáo CTT - tình hình giao dịch (bảng 2)
  getTopMerchantReport(request): Observable<any> {
    return this.http.post(`${this.baseUrl}/payment-gw/quarter-merchant-summary`, request).pipe(
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
