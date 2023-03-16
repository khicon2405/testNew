import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ConfigService } from '../configuration/configuration.service';

@Injectable({
  providedIn: 'root'
})
export class SecuredAccountService {
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

  // danh sách tài khoản đảm bảo ví
  getSecuredAccountList(request, excel?): Observable<any> {
    const url = 'payment-account/get' + (excel ? '/excel-report' : '');
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

  // quyết toán
  settlement(): Observable<any> {
    return this.http.post(`${this.baseUrl}/payment-account/request`, {}).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  // bắn ra lỗi
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.status);
  }

  // 2 api dưới đây không dùng nữa
  requestSettlement(): Observable<any> {
    return this.http.get(`${this.baseUrl}/payment-account/request`).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  confirmSettlement(request): Observable<any> {
    return this.http.post(`${this.baseUrl}/payment-account/confirm`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
}
