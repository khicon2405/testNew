import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ConfigService } from '../configuration/configuration.service';

@Injectable({
  providedIn: 'root'
})
export class RiskTransactionService {
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

  // danh sách GD nghi ngờ
  getRiskTransaction(request, excel?): Observable<any> {
    const url = 'supicious-trans/get' + (excel ? '/excel-report' : '');
    if (excel) {
      delete request.page;
      delete request.pageSize;
      return this.http
        .post(`${this.baseUrl}/${url}`, request, { responseType: 'blob' })
        .pipe(catchError(this.errorHandler));
    }
    return this.http.post(`${this.baseUrl}/${url}`, request).pipe(
      map((data: any) => {
        // fake
        data.data = [
          {
            account_no: "00215xxx",
            amount: 700000,
            bank_name: "Ngân hàng Thương mại Cổ phần Sài gòn (SCB)",
            bank_no: "SCB",
            created_at: "2021-07-01T08:03:42.000000Z",
            id: 1,
            ref_trans_id: "FT000003423421",
            trans_id: "20210322578",
            trans_type: "payment",
            reason: 'Cảnh báo tài khoản/ví'
          },
          {
            account_no: "970429xxxxxx6735",
            amount: 560000,
            bank_name: "Ngân hàng Thương mại Cổ phần Sài gòn (SCB)",
            bank_no: "SCB",
            created_at: "2021-06-14T08:03:42.000000Z",
            id: 2,
            ref_trans_id: "FT045645363563",
            trans_id: "89857567567",
            trans_type: "payment",
            reason: 'Cảnh báo số thẻ'
          },
          {
            account_no: "00436xxx",
            amount: 900000,
            bank_name: "Ngân hàng Thương mại Cổ phần Sài gòn (SCB)",
            bank_no: "SCB",
            created_at: "2021-05-14T08:03:42.000000Z",
            id: 3,
            ref_trans_id: "FT000003423421",
            trans_id: "64532580713",
            trans_type: "payment",
            reason: 'Cảnh báo tài khoản/ví'
          },
          {
            account_no: "970433xxxxxx021",
            amount: 900000,
            bank_name: "Ngân hàng Thương mại Cổ phần Sài gòn (SCB)",
            bank_no: "SCB",
            created_at: "2021-05-10T08:03:42.000000Z",
            id: 4,
            ref_trans_id: "FT045645363563",
            trans_id: "6456450058",
            trans_type: "payment",
            reason: 'Cảnh báo tài khoản/ví'
          },
          {
            account_no: "970422xxxxxx0546",
            amount: 900000,
            bank_name: "Ngân hàng Thương mại Cổ phần Sài gòn (SCB)",
            bank_no: "SCB",
            created_at: "2021-05-05T08:03:42.000000Z",
            id: 5,
            ref_trans_id: "FT000003423421",
            trans_id: "89546451800",
            trans_type: "payment",
            reason: 'Cảnh báo dải IP'
          },
          {
            account_no: "970433xxxxxx025",
            amount: 900000,
            bank_name: "Ngân hàng Thương mại Cổ phần Sài gòn (SCB)",
            bank_no: "SCB",
            created_at: "2021-02-11T08:03:42.000000Z",
            id: 6,
            ref_trans_id: "FT045645363563",
            trans_id: "89797934564",
            trans_type: "payment",
            reason: 'Cảnh báo dải Pin thẻ'
          }
        ];
        data.total = 6;
        return data;
      })
    );
  }

  // chi tiết GD nghi ngờ
  getDetailRiskTransaction(request): Observable<any> {
    // fake
    request.id = '164080342824';
    return this.http.post(`${this.baseUrl}/supicious-trans/detail`, request).pipe(
      map((data: any) => {
        // fake
        data.data = {
          trans_data: {
            amount: 700000,
            created_at: "2021-07-01T08:03:42.000000Z",
            detail: null,
            fee: 1500,
            ref_trans_id: "FT000003423421",
            total: 701500,
            trans_id: "20210322578",
            trans_type: "payment",
          },
          user_data: {
            account_holder: "TRAN VAN TY",
            bank_name: "Ngân hàng Thương mại Cổ phần Sài gòn (SCB)",
            bank_no: "SCB",
            card_no: "00215xxx",
            expired_date: "04/27",
            name: "Trần Văn Tý",
            phone: "0389563163",
          }
        };
        return data;
      })
    );
  }

  // danh sách GD chặn
  getBlockTransaction(request, excel?): Observable<any> {
    const url = 'supicious-trans/get' + (excel ? '/excel-report' : '');
    if (excel) {
      delete request.page;
      delete request.pageSize;
      return this.http
        .post(`${this.baseUrl}/${url}`, request, { responseType: 'blob' })
        .pipe(catchError(this.errorHandler));
    }
    return this.http.post(`${this.baseUrl}/${url}`, request).pipe(
      map((data: any) => {
        // fake
        data.data = [
          {
            account_no: "00190xxx",
            amount: 100000,
            bank_name: "Ngân hàng Thương mại Cổ phần Sài gòn (SCB)",
            bank_no: "SCB",
            created_at: "2021-07-01T08:03:42.000000Z",
            id: 1,
            ref_trans_id: "",
            trans_id: "20210322578",
            trans_type: "payment",
            reason: 'Chặn tài khoản/ví'
          },
          {
            account_no: "970432xxxxxx8753",
            amount: 50000000,
            bank_name: "Ngân hàng Thương mại Cổ phần Sài gòn (SCB)",
            bank_no: "SCB",
            created_at: "2021-06-14T08:03:42.000000Z",
            id: 2,
            ref_trans_id: "",
            trans_id: "89857567567",
            trans_type: "payment",
            reason: 'Chặn số thẻ'
          },
          {
            account_no: "00215xxx",
            amount: 150000,
            bank_name: "Ngân hàng Thương mại Cổ phần Sài gòn (SCB)",
            bank_no: "SCB",
            created_at: "2021-05-14T08:03:42.000000Z",
            id: 3,
            ref_trans_id: "",
            trans_id: "64532580713",
            trans_type: "payment",
            reason: 'Chặn tài khoản/ví'
          },
          {
            account_no: "970433xxxxxx021",
            amount: 360000,
            bank_name: "Ngân hàng Thương mại Cổ phần Sài gòn (SCB)",
            bank_no: "SCB",
            created_at: "2021-05-10T08:03:42.000000Z",
            id: 4,
            ref_trans_id: "",
            trans_id: "6456450058",
            trans_type: "payment",
            reason: 'Chặn tài khoản/ví'
          },
          {
            account_no: "970433xxxxxx7674",
            amount: 900000,
            bank_name: "Ngân hàng Thương mại Cổ phần Sài gòn (SCB)",
            bank_no: "SCB",
            created_at: "2021-05-05T08:03:42.000000Z",
            id: 5,
            ref_trans_id: "",
            trans_id: "89546451800",
            trans_type: "payment",
            reason: 'Chặn dải IP'
          },
          {
            account_no: "970429xxxxxx7523",
            amount: 900000,
            bank_name: "Ngân hàng Thương mại Cổ phần Sài gòn (SCB)",
            bank_no: "SCB",
            created_at: "2021-02-11T08:03:42.000000Z",
            id: 6,
            ref_trans_id: "",
            trans_id: "89797934564",
            trans_type: "payment",
            reason: 'Chặn dải Pin thẻ'
          }
        ];
        data.total = 6;
        return data;
      })
    );
  }

  // chi tiết GD chặn
  getDetailBlockTransaction(request): Observable<any> {
    // fake
    request.id = '164080342824';
    return this.http.post(`${this.baseUrl}/supicious-trans/detail`, request).pipe(
      map((data: any) => {
        // fake
        data.data = {
          trans_data: {
            amount: 700000,
            created_at: "2021-07-01T08:03:42.000000Z",
            detail: null,
            fee: 1500,
            ref_trans_id: "FT000003423421",
            total: 701500,
            trans_id: "20210322578",
            trans_type: "payment",
          },
          user_data: {
            account_holder: "TRAN VAN TY",
            bank_name: "Ngân hàng Thương mại Cổ phần Sài gòn (SCB)",
            bank_no: "SCB",
            card_no: "00215xxx",
            expired_date: "04/27",
            name: "Trần Văn Tý",
            phone: "0389563163",
          }
        };
        return data;
      })
    );
  }

  // bắn ra lỗi
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.status);
  }
}
