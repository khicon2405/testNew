import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { map } from "rxjs/operators";
import { ConfigService } from "../configuration/configuration.service";
import { catchError } from "rxjs/operators";
import { TranslateService } from "@ngx-translate/core";
import { ToastrService } from "ngx-toastr";
import { saveAs as importedSaveAs } from "file-saver";
@Injectable({
  providedIn: "root",
})
export class BambooReconcileService {
  baseUrl = "";

  constructor(
    private http: HttpClient,
    private config: ConfigService,
    private toastr: ToastrService,
    public translate: TranslateService
  ) {
    this.baseUrl =
      this.config &&
      this.config.config &&
      this.config.config.API_ENDPOINTS &&
      this.config.config.API_ENDPOINTS.REAL_API_URL
        ? this.config.config.API_ENDPOINTS.REAL_API_URL
        : "";
  }
  // getListBatchFile(request): Observable<any> {
  //     const url = 'Bamboo/batch-file';
  //     return this.http
  //         .post(`${this.baseUrl}/${url}`, request)
  //         .pipe(
  //             map((data: any) => {
  //                 return data;
  //             })
  //         );
  // }
  //tra cứu đối soát thanh toán
  getPaygateReconcileResult(request): Observable<any> {
    const url = "Bamboo/results-transaction-payment";
    return this.http.post(`${this.baseUrl}/${url}`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
  getWalletReconcileResult(request): Observable<any> {
    const url = "Bamboo/results-transaction-financial";
    return this.http.post(`${this.baseUrl}/${url}`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
  getNonFinancialReconcileResult(request): Observable<any> {
    const url = "Bamboo/results-transaction-no-financial";
    return this.http.post(`${this.baseUrl}/${url}`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
  getReconcileReportData(request): Observable<any> {
    const url = "Bamboo/control-report";
    return this.http.post(`${this.baseUrl}/${url}`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  // detail doi xoat
  getPaygateReconcileDetail(request): Observable<any> {
    const url = "Bamboo/paygate-financial-reconcile/detail";
    return this.http.post(`${this.baseUrl}/${url}`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
  getWalletReconcileDetail(request): Observable<any> {
    const url = "Bamboo/financial-reconcile/detail";
    return this.http.post(`${this.baseUrl}/${url}`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
  getNonFinancialReconcileDetail(request): Observable<any> {
    const url = "Bamboo/non-financial-reconcile/detail";
    return this.http.post(`${this.baseUrl}/${url}`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
  // báo cáo chi tiết
  getReportPaygateReconcileDetail(request): Observable<any> {
    const url = "Bamboo/control-report/detail-paygate";
    return this.http.post(`${this.baseUrl}/${url}`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
  getReportWalletReconcileDetail(request): Observable<any> {
    const url = "Bamboo/control-report/detail-financial";
    return this.http.post(`${this.baseUrl}/${url}`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
  getReportNonFinancialReconcileDetail(request): Observable<any> {
    const url = "Bamboo/control-report/detail-non-financial";
    return this.http.post(`${this.baseUrl}/${url}`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
  //xuat chi tiet doi xoat
  public exportReportPaygateReconcileDetail(request) {
    const url = "Bamboo/control-report/detail-paygate/export";
    this.http
      .post(`${this.baseUrl}/${url}`, request, { responseType: "blob" })
      // .post(`${this.baseUrl}/${url}`, request, { responseType: 'blob' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error.status);
        })
      )
      .subscribe(
        (data) => {
          if (data) {
            importedSaveAs(
              data,
              "REPORT-GDTT-" + new Date().toISOString().slice(0, 10)
            );
          }
        },
        (error) => {
          if (error === 404) {
            this.toastr.error(this.translate.instant("commonAction.noData"));
          }
        }
      );
  }
  public exportReportWalletReconcileDetail(request) {
    const url = "Bamboo/control-report/detail-financial/export";
    this.http
      .post(`${this.baseUrl}/${url}`, request, { responseType: "blob" })
      // .post(`${this.baseUrl}/${url}`, request, { responseType: 'blob' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error.status);
        })
      )
      .subscribe(
        (data) => {
          if (data) {
            importedSaveAs(
              data,
              "REPORT-GDTC-" + new Date().toISOString().slice(0, 10)
            );
          }
        },
        (error) => {
          if (error === 404) {
            this.toastr.error(this.translate.instant("commonAction.noData"));
          }
        }
      );
  }
  public exportReportNonFinancialReconcileDetail(request) {
    const url = "Bamboo/control-report/detail-non-financial/export";
    this.http
      .post(`${this.baseUrl}/${url}`, request, { responseType: "blob" })
      // .post(`${this.baseUrl}/${url}`, request, { responseType: 'blob' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error.status);
        })
      )
      .subscribe(
        (data) => {
          if (data) {
            importedSaveAs(
              data,
              "REPORT-GDPTC-" + new Date().toISOString().slice(0, 10)
            );
          }
        },
        (error) => {
          if (error === 404) {
            this.toastr.error(this.translate.instant("commonAction.noData"));
          }
        }
      );
  }
  // xuất file ex
  public exportPaygateReconcileResult(request) {
    const url = "Bamboo/paygate-financial-reconcile/export";
    this.http
      .post(`${this.baseUrl}/${url}`, request, { responseType: "blob" })
      // .post(`${this.baseUrl}/${url}`, request, { responseType: 'blob' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error.status);
        })
      )
      .subscribe(
        (data) => {
          if (data) {
            importedSaveAs(
              data,
              "KẾT QUẢ ĐỐI SOÁT GIAO DỊCH THANH TOÁN - " +
                new Date().toISOString().slice(0, 10)
            );
          }
        },
        (error) => {
          if (error === 404) {
            this.toastr.error(this.translate.instant("commonAction.noData"));
          }
        }
      );
  }
  public exportWalletReconcileResult(request) {
    const url = "Bamboo/financial-reconcile/export";
    this.http
      .post(`${this.baseUrl}/${url}`, request, { responseType: "blob" })
      // .post(`${this.baseUrl}/${url}`, request, { responseType: 'blob' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error.status);
        })
      )
      .subscribe(
        (data) => {
          if (data) {
            importedSaveAs(
              data,
              "KẾT QUẢ ĐỐI SOÁT GIAO DỊCH TÀI CHÍNH - " +
                new Date().toISOString().slice(0, 10)
            );
          }
        },
        (error) => {
          if (error === 404) {
            this.toastr.error(this.translate.instant("commonAction.noData"));
          }
        }
      );
  }
  public exportNonFinancialReconcileResult(request) {
    const url = "Bamboo/non-financial-reconcile/export";
    this.http
      .post(`${this.baseUrl}/${url}`, request, { responseType: "blob" })
      // .post(`${this.baseUrl}/${url}`, request, { responseType: 'blob' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error.status);
        })
      )
      .subscribe(
        (data) => {
          if (data) {
            importedSaveAs(
              data,
              "KẾT QUẢ ĐỐI SOÁT GIAO DỊCH PHI TÀI CHÍNH - " +
                new Date().toISOString().slice(0, 10)
            );
          }
        },
        (error) => {
          if (error === 404) {
            this.toastr.error(this.translate.instant("commonAction.noData"));
          }
        }
      );
  }
  // danh sách tk đăng ký ví
  getListWalletRegister(request, excel?): Observable<any> {
    const url = "user/get" + (excel ? "/excel-report" : "");
    if (excel) {
      delete request.page;
      delete request.pageSize;
      return this.http
        .post(`${this.baseUrl}/${url}`, request, { responseType: "blob" })
        .pipe(catchError(this.errorHandler));
    }
    return this.http.post(`${this.baseUrl}/${url}`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
  public downloadbatchFile(request) {
    const url = "Bamboo/batch-file/download";
    this.http
      .post(`${this.baseUrl}${url}`, request, { responseType: "blob" })
      // .post(`${this.baseUrl}/${url}`, request, { responseType: 'blob' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error.status);
        })
      )
      .subscribe(
        (data) => {
          if (data) {
            importedSaveAs(data, request.fileName);
          }
        },
        (error) => {
          if (error === 404) {
            this.toastr.error(this.translate.instant("commonAction.noData"));
          }
        }
      );
  }
  public exportReconcileReportData(request) {
    const url = "Bamboo/control-report/export";
    this.http
      .post(`${this.baseUrl}/${url}`, request, { responseType: "blob" })
      // .post(`${this.baseUrl}/${url}`, request, { responseType: 'blob' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error.status);
        })
      )
      .subscribe(
        (data) => {
          if (data) {
            importedSaveAs(
              data,
              "SUMMARY-REPORT-" + new Date().toISOString().slice(0, 10)
            );
          }
        },
        (error) => {
          if (error === 404) {
            this.toastr.error(this.translate.instant("commonAction.noData"));
          }
        }
      );
  }
  // manager
  public apiManagerRunJob(request): Observable<any> {
    const url = "Bamboo/manager/reconcile-job";
    return this.http.post(`${this.baseUrl}/${url}`, request).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
  public apiManagerSendeFile(request): Observable<any> {
    const url = "Bamboo/manager/reconcile-send-file-mb";
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
