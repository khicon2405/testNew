import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { map } from "rxjs/operators";
import { ConfigService } from "../configuration/configuration.service";
import { catchError } from 'rxjs/operators';
import { TranslateService } from "@ngx-translate/core";
import { ToastrService } from "ngx-toastr";
import { saveAs as importedSaveAs } from 'file-saver';
@Injectable({
    providedIn: "root",
})
export class LookupTransactionService {
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
    // get list data
    getListLookupTransPayment(request): Observable<any> {
        const url = 'Bamboo/transaction-lookup/transaction-payment';
        return this.http
            .post(`${this.baseUrl}/${url}`, request)
            .pipe(
                map((data: any) => {
                    return data;
                })
            );
    }
    getListLookupTransRefund(request): Observable<any> {
      const url = 'Bamboo/transaction-lookup/transaction-refund';
      return this.http
          .post(`${this.baseUrl}/${url}`, request)
          .pipe(
              map((data: any) => {
                  return data;
              })
          );
    }
    // get data details
    getDetailLookupTransPayment(request): Observable<any> {
      const url = 'Bamboo/transaction-lookup/transaction-payment/detail';
      return this.http
          .post(`${this.baseUrl}/${url}`, request)
          .pipe(
              map((data: any) => {
                  return data;
              })
          );
  }
  getDetailLookupTransRefund(request): Observable<any> {
    const url = 'Bamboo/transaction-lookup/transaction-refund/detail';
    return this.http
        .post(`${this.baseUrl}/${url}`, request)
        .pipe(
            map((data: any) => {
                return data;
            })
        );
  }
    // export file data
    public exportLookupTransPayment(request) {
        const url = "Bamboo/transaction-lookup/transaction-payment/export"
        this.http
            .post(`${this.baseUrl}/${url}`, request, { responseType: 'blob' })
            // .post(`${this.baseUrl}/${url}`, request, { responseType: 'blob' })
            .pipe(catchError(
                (error: HttpErrorResponse) => {
                    return throwError(error.status);
                }
            )).subscribe(
                data => {
                    if (data) {
                      importedSaveAs(data,"TRA-CUU-" +  new Date().toISOString().slice(0,10) + "-GIAO-DICH-THAN-TOAN" );
                    }
                },
                error => {
                    if (error === 404) {
                        this.toastr.error(
                            this.translate.instant("commonAction.noData")
                        );
                    }
                }
            );
    }
    public exportLookupTransRefund(request) {
      const url = "Bamboo/transaction-lookup/transaction-refund/export"
      this.http
          .post(`${this.baseUrl}/${url}`, request, { responseType: 'blob' })
          // .post(`${this.baseUrl}/${url}`, request, { responseType: 'blob' })
          .pipe(catchError(
              (error: HttpErrorResponse) => {
                  return throwError(error.status);
              }
          )).subscribe(
              data => {
                  if (data) {
                      importedSaveAs(data,"TRA-CUU-" +  new Date().toISOString().slice(0,10) + "-GIAO-DICH-HOAN-TRA" );
                  }
              },
              error => {
                  if (error === 404) {
                      this.toastr.error(
                          this.translate.instant("commonAction.noData")
                      );
                  }
              }
          );
  }
    // bắn ra lỗi
    errorHandler(error: HttpErrorResponse) {
        console.log(error);
        return throwError(error.status);
    }
}
