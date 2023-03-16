import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ConfigService } from '../configuration/configuration.service';

@Injectable({
  providedIn: 'root'
})
export class CollectPayService {
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

  // GD thu hộ - chi hộ
  getCollectPayList(request, excel?): Observable<any> {
    const url = 'payment-collect-behalf/get' + (excel ? '/excel-report' : '');
    if (excel) {
      delete request.page;
      delete request.pageSize;
      return this.http
        .post(`${this.baseUrl}/${url}`, request, { responseType: 'blob' })
        .pipe(catchError(this.errorHandler));
    }
    return this.http.post(`${this.baseUrl}/payment-collect-behalf/get`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  // chi tiết GD thu hộ - chi hộ
  getDetailCollectPay(request): Observable<any> {
    return this.http.post(`${this.baseUrl}/payment-collect-behalf/detail`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  // tra cứu số tài khoản KH để lấy tên KH
  checkCustomerInfo(request): Observable<any> {
    return this.http.post(`${this.baseUrl}/payment-behalf/user/inquiry`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  // danh sách dịch vụ
  getServiceList(request): Observable<any> {
    return this.http.post(`${this.baseUrl}/payment-behalf/service/inquiry`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  // danh sách nhà cung cấp theo dịch vụ
  getProviderListByService(request): Observable<any> {
    return this.http.post(`${this.baseUrl}/payment-behalf/provider/inquiry`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  // tra cứu mã hóa đơn để lấy số tiền
  checkOrderInfo(request): Observable<any> {
    return this.http.post(`${this.baseUrl}/payment-behalf/order/inquiry`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  // tạo GD chi hộ
  payment(request): Observable<any> {
    return this.http.post(`${this.baseUrl}/payment-behalf/payment/trans-request`, request).pipe(
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
