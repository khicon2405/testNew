import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ConfigService } from '../configuration/configuration.service';

@Injectable({
  providedIn: 'root'
})
export class RiskManagementService {
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

  // bắn ra lỗi
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.status);
  }

  // Lấy danh sách QLRR
  getRisk(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/risk/get`, body).pipe(
      map((data: any) => {
        // fake
        data.list_data = [
          {
            account: "00215xxx",
            action_type: "block",
            activated_date: "20/05/2021",
            creator: { email: "email@gmail.com", phone: "0988589124", fullname: "Admin QTRR", username: "test_nv" },
            issuer_id: 385,
            issuer_name: "Ngân hàng thương mại cổ phần Sài Gòn",
            last_change_user: { email: "hfldyqhwc@emltmp.com", phone: "0987656767", fullname: "Admin QTRR", username: "test_ql" },
            risk_id: 693,
            risk_type: "account",
            risk_via: "System",
            status: "active",
            card: "970429xxxxxx6735",
            card_bin: "970422",
            ip_address: "95.078.032",
            country_code: "CA"
          },
          {
            account: "00670xxx",
            action_type: "warning",
            activated_date: "09/06/2021",
            creator: { email: "email@gmail.com", phone: "0988589124", fullname: "Admin QTRR", username: "test_nv" },
            issuer_id: 383,
            issuer_name: "Ngân hàng thương mại cổ phần Sài Gòn",
            last_change_user: { email: "hfldyqhwc@emltmp.com", phone: "0987656767", fullname: "Admin QTRR", username: "test_ql" },
            risk_id: 691,
            risk_type: "account",
            risk_via: "System",
            status: "active",
            card: "970429xxxxxx135",
            card_bin: "970429",
            ip_address: "330.321.408",
            country_code: "CN"
          },
          {
            account: "00436xxx",
            action_type: "block",
            activated_date: "09/06/2021",
            creator: { email: "email@gmail.com", phone: "0988589124", fullname: "Admin QTRR", username: "test_nv" },
            issuer_id: 383,
            issuer_name: "Ngân hàng thương mại cổ phần Sài Gòn",
            last_change_user: { email: "hfldyqhwc@emltmp.com", phone: "0987656767", fullname: "Admin QTRR", username: "test_ql" },
            risk_id: 691,
            risk_type: "account",
            risk_via: "System",
            status: "active",
            card: "970432xxxxxx8753",
            card_bin: "970436",
            ip_address: "1.541.605.760",
            country_code: "US"
          },
          {
            account: "00190xxx",
            action_type: "warning",
            activated_date: "20/05/2021",
            creator: { email: "email@gmail.com", phone: "0988589124", fullname: "Admin QTRR", username: "test_nv" },
            issuer_id: 385,
            issuer_name: "Ngân hàng thương mại cổ phần Sài Gòn",
            last_change_user: { email: "hfldyqhwc@emltmp.com", phone: "0987656767", fullname: "Admin QTRR", username: "test_ql" },
            risk_id: 693,
            risk_type: "account",
            risk_via: "System",
            status: "active",
            card: "970433xxxxxx7674",
            card_bin: "970436",
            ip_address: "212.xxx.xxx.3",
            country_code: "N/A"
          },
          {
            account: "00800xxx",
            action_type: "warning",
            activated_date: "09/06/2021",
            creator: { email: "email@gmail.com", phone: "0988589124", fullname: "Admin QTRR", username: "test_nv" },
            issuer_id: 383,
            issuer_name: "Ngân hàng thương mại cổ phần Sài Gòn",
            last_change_user: { email: "hfldyqhwc@emltmp.com", phone: "0987656767", fullname: "Admin QTRR", username: "test_ql" },
            risk_id: 691,
            risk_type: "account",
            risk_via: "System",
            status: "active",
            card: "970429xxxxxx7523",
            card_bin: "970436",
            ip_address: "212.xxx.xxx.3",
            country_code: "N/A"
          },
          {
            account: "00605xxx",
            action_type: "block",
            activated_date: "09/06/2021",
            creator: { email: "email@gmail.com", phone: "0988589124", fullname: "Admin QTRR", username: "test_nv" },
            issuer_id: 383,
            issuer_name: "Ngân hàng thương mại cổ phần Sài Gòn",
            last_change_user: { email: "hfldyqhwc@emltmp.com", phone: "0987656767", fullname: "Admin QTRR", username: "test_ql" },
            risk_id: 691,
            risk_type: "account",
            risk_via: "System",
            status: "active",
            card: "970429xxxxxx7521",
            card_bin: "970436",
            ip_address: "212.xxx.xxx.3",
            country_code: "N/A"
          },
        ];
        data.total_record = 6;
        if (body.risk_type === 'card_bin') {
          data.list_data = data.list_data.slice(0,2);
          data.total_record = 2;
        }
        if (body.risk_type === 'ip') {
          data.list_data = data.list_data.slice(0,3);
          data.total_record = 3;
        }
        return data;
      })
    );
  }

  // Danh sách quốc gia
  getNationList(): Observable<any> {
    // fake
    const body = {
      page: 1,
      pageSize: 10
    }
    return this.http
      .post(`${this.baseUrl}/risk/get`, body)
      .pipe(
        map((data: any) => {
          // fake
          data.list_data = [{ country_code: "N/A" }];
          return data;
        })
      );
  }

  // Thêm mới tiêu chí QLRR
  addNew(browserInfo: any, file?: any): Observable<any> {
    const formData = new FormData();
    formData.append("req", JSON.stringify(browserInfo));
    if (file) {
      formData.append("file", file);
    }
    return this.http.post(`${this.baseUrl}/risk/addnew`, formData).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  // Cập nhật tiêu chí QLRR
  edit(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/risk/edit`, body).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  // Chuyển trạng thái tiêu chí QLRR thành hiệu lực/không hiệu lực
  active(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/risk/change-status`, body).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  // Lịch sử cập nhật
  getHistory(body: any): Observable<any> {
    // fake
    body.page = 1;
    body.pageSize = 10;
    return this.http.post(`${this.baseUrl}/risk/get`, body).pipe(
      map((data: any) => {
        // fake
        data.list_data = [
          {
            action: "ADD",
            action_req: { data: [{ issuer_id: 385, error_code: "00", action_type: "warning", object_value: "9701xxx" }] },
            status: "active",
            updated_at: "05/07/2021 10:45:13",
            user_name: "Admin QTRR",
          }
        ];
        data.total_record = 1;
        return data;
      })
    );
  }

  // validate số thẻ
  validateCard(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/risk/check-valid-card`, body).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  // danh sách tiêu chí QLRR khác
  getOtherRisk(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/risk/get`, body).pipe(
      map((data: any) => {
        // fake
        data.list_data = [
          {
            name: 'Nhập OTP quá nhiều lần',
            type: '9',
            value: '3',
            start_time: '1/1/2021',
            end_time: '31/12/2021',
            status: 'active',
            id: 1
          },
          {
            name: 'Giao dịch lớn bất thường',
            type: '4',
            value: '100000000',
            start_time: '1/1/2021',
            end_time: '31/12/2021',
            status: 'active',
            id: 2
          },
          {
            name: 'Thời gian giao dịch bất cập',
            type: '7',
            value: '23h - 06h',
            start_time: '1/1/2021',
            end_time: '31/12/2021',
            status: 'active',
            id: 3
          }
        ];
        data.total_record = 2;
        return data;
      })
    );
  }

  // danh sách tiêu chí QLRR khác
  getDetailOtherRisk(body: any): Observable<any> {
        // fake
        body.page = 1;
        body.pageSize = 10;
    return this.http.post(`${this.baseUrl}/risk/get`, body).pipe(
      map((data: any) => {
        // fake
        data.data = {
          name: 'Nhập OTP quá nhiều lần',
          type: '9',
          min_amount: 100000,
          max_amount: 1000000,
          min_account: '9704xxxx',
          value: 200000,
          trans_amount: 10,
          send_amount: 5,
          receive_amount: 5,
          no_trans_amount: 2,
          time: '1/1/2021',
          amount: 1,
          from_date: '2/1/2021',
          to_date: '2/12/2021',
          active: true
        };
        return data;
      })
    );
  }

  // Thêm mới tiêu chí QLRR khác
  addOther(body): Observable<any> {
    // fake
    body.page = 1;
    body.pageSize = 10;
    return this.http.post(`${this.baseUrl}/risk/get`, body).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  // Cập nhật tiêu chí QLRR khác
  editOther(body: any): Observable<any> {
    // fake
    body.page = 1;
    body.pageSize = 10;
    return this.http.post(`${this.baseUrl}/risk/get`, body).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  // danh sách giao dịch nghi ngờ
  getSuspiciousTransaction(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/risk/get`, body).pipe(
      map((data: any) => {
        data.list_data.map((i) => {
          i.merchant = "ABC";
          i.trans_id = "123456789";
          i.created_date = "20/04/2020 10:11";
          i.method = "block";
          i.creator = "Nguyễn Văn A";
          i.value = "500000";
          i.status = "1";
          i.payment = "Thẻ ATM";
          i.setting = "Thẻ ngân hàng";
        });
        return data;
      })
    );
  }

  // danh sách giao dịch chặn
  getBlockTransaction(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/risk/get`, body).pipe(
      map((data: any) => {
        data.list_data.map((i) => {
          i.merchant = "ABC";
          i.trans_id = "123456789";
          i.created_date = "20/04/2020 10:11";
          i.method = "block";
          i.creator = "Nguyễn Văn A";
          i.value = "500000";
          i.status = "1";
          i.payment = "Thẻ ATM";
          i.setting = "Thẻ ngân hàng";
        });
        return data;
      })
    );
  }

  // Xóa tiêu chí QLRR
  delete(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/risk/delete`, body).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
}
