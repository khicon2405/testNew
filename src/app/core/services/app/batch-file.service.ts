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
export class BatchFileService {
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
    getListBatchFile(request): Observable<any> {
        const url = 'Bamboo/batch-file';
        return this.http
            .post(`${this.baseUrl}/${url}`, request)
            .pipe(
                map((data: any) => {
                    return data;
                })
            );
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
    public downloadbatchFile(request) {
        const url = "Bamboo/batch-file/download"
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
                        importedSaveAs(data, request.fileName);
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
