import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { map } from "rxjs/operators";
import { ConfigService } from "../configuration/configuration.service";
import { catchError } from 'rxjs/operators';
import { TranslateService } from "@ngx-translate/core";
import { ToastrService } from "ngx-toastr";
@Injectable({
  providedIn: "root",
})
export class WalletService {
  baseUrl = "";

  constructor(private http: HttpClient, private config: ConfigService,
    private toastr: ToastrService,
    public translate: TranslateService,) {
    this.baseUrl =
      this.config &&
        this.config.config &&
        this.config.config.API_ENDPOINTS &&
        this.config.config.API_ENDPOINTS.REAL_API_URL
        ? this.config.config.API_ENDPOINTS.REAL_API_URL
        : "";
  }

  // danh sách tk đăng ký ví
  getListWalletRegister(request, excel?): Observable<any> {
    const url = 'user/get' + (excel ? '/excel-report' : '');
    if (excel) {
      delete request.page;
      delete request.pageSize;
      return this.http
        .post(`${this.baseUrl}/${url}`, request, { responseType: 'blob' })
        .pipe(catchError(this.errorHandler));
    }
    return this.http
      .post(`${this.baseUrl}/${url}`, request)
      .pipe(
        map((data: any) => {
          return data;
        })
      );
  }

  // chi tiết tk đăng ký ví
  getDetailWalletRegister(request): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/user/detail`, request)
      .pipe(
        map((data: any) => {
          return data;
        })
      );
  }

  // thay đổi trạng thái tk đăng ký ví
  changeStatusOfWalletRegister(request): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/user/change-status`, request)
      .pipe(
        map((data: any) => {
          return data;
        })
      );
  }

  // liên hệ khách hàng đăng ký ví
  sendEmail(request): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/user/detail`, request)
      .pipe(
        map((data: any) => {
          return data;
        })
      );
  }

  // thêm mới/cập nhật cấu hình hạn mức
  updateLimitConfig(request, type): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/limit-config/` + type, request)
      .pipe(
        map((data: any) => {
          return data;
        })
      );
  }

  // xóa cấu hình hạn mức
  deleteLimitConfig(request): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/limit-config/delete`, request)
      .pipe(
        map((data: any) => {
          return data;
        })
      );
  }

  // thêm mới/cập nhật cấu hình thanh toán
  updatePaymentConfig(request, type): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/payment-config/` + type, request)
      .pipe(
        map((data: any) => {
          return data;
        })
      );
  }

  // xóa cấu hình thanh toán
  deletePaymentConfig(request): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/payment-config/delete`, request)
      .pipe(
        map((data: any) => {
          return data;
        })
      );
  }

  // cho phép giao dịch trực tuyến
  allowOnlineTransaction(request): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/allow-online-transaction`, request)
      .pipe(
        map((data: any) => {
          return data;
        })
      );
  }

  // danh sách tk liên kết ký ví
  getListWalletLink(request, excel?): Observable<any> {
    const url = 'bank-link/get' + (excel ? '/excel-report' : '');
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

  // chi tiết tk liên kết ký ví
  getDetailWalletLink(request): Observable<any> {
    return this.http.post(`${this.baseUrl}/bank-link/detail`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  // Danh sách GD nạp tiền
  getListCashinTransaction(request, excel?): Observable<any> {
    const url = 'cash-in/get' + (excel ? '/excel-report' : '');
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

  // Chi tiết GD nạp tiền
  getDetailCashinTransaction(request): Observable<any> {
    return this.http.post(`${this.baseUrl}/cash-in/detail`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  // Danh sách GD rút tiền
  getListCashoutTransaction(request, excel?): Observable<any> {
    const url = 'cash-out/get' + (excel ? '/excel-report' : '');
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

  // Chi tiết GD rút tiền
  getDetailCashoutTransaction(request): Observable<any> {
    return this.http.post(`${this.baseUrl}/cash-out/detail`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  // Danh sách GD chuyển tiền
  getListTransferTransaction(request, excel?): Observable<any> {
    const url = 'transfer/get' + (excel ? '/excel-report' : '');
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

  // Chi tiết GD chuyển tiền
  getDetailTransferTransaction(request): Observable<any> {
    return this.http.post(`${this.baseUrl}/transfer/detail`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  // Danh sách GD thanh toán
  getListPaymentTransaction(request, excel?): Observable<any> {
    const url = 'billing-payment/get' + (excel ? '/excel-report' : '');
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

  // Chi tiết GD thanh toán
  getDetailPaymentTransaction(request): Observable<any> {
    return this.http.post(`${this.baseUrl}/billing-payment/detail`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  // Báo cáo ví - ví theo kỳ
  getWalletByPeriodReport(request, type, excel?): Observable<any> {
    let url = '';
    switch (type) {
      case '2':
        url = 'bank/debit-credit-inquiry';
        break;
      case '3':
        url = 'user/top-wallet-inquiry';
        break;
      default:
        url = 'user/periodical/report';
        break;
    }
    url += excel ? '/excel-report' : '';
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

  // Báo cáo ví - số lượng ví
  getTotalWalletReport(request, excel?): Observable<any> {
    const url = 'user/quantity/report' + (excel ? '/excel-report' : '');
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

  // Báo cáo ví - thông tin đối tác
  getPartnerInfoReport(request, excel?): Observable<any> {
    const url = 'user/wallet-partner-info' + (excel ? '/excel-report' : '');
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

  // Báo cáo ví - tình hình giao dịch
  getTransactionInfoReport(request, type, excel?): Observable<any> {
    let url = '';
    switch (type) {
      case 'top_organization': case 'top_personal': case 'top_merchant':
        url = 'user/top-wallet-quarter-transaction-summary';
        break;
      default:
        url = 'user/wallet-quarter-transaction-summary';
        break;
    }
    url += excel ? '/excel-report' : '';
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

  // bắn ra lỗi
  errorHandler(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error.status);
  }
}
