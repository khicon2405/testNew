import { AuthenticationAndAuthorizationService } from './../../services/authentification-and-authorization.service';

import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { LocalStorageType, SIGNATURE_KEY } from '@core/constants';
import { BrowserAndLocationInformationService } from '@core/services';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { Md5 } from "ts-md5";
import { ConfigService } from '@core/services/configuration/configuration.service';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  private configAPI: any;
  private ignoreAPI: string[] = [];

  constructor(
    private router: Router,
    private authService: AuthenticationAndAuthorizationService,
    public config: ConfigService,
    private dialog: MatDialog,
  ) {
    this.configAPI = this.config.config && this.config.config.API_ENDPOINTS ? this.config.config.API_ENDPOINTS : '';
    this.ignoreAPI = [
      this.configAPI.IP_API_URL.toString(),
      this.configAPI.REAL_API_URL_2 + this.configAPI.CHANGEAVATAR_API_URL,
    ];
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem(LocalStorageType.Token);
    if (req.url === this.configAPI.IP_API_URL) {
      return next.handle(req);
    } else {
      const browserInfo = BrowserAndLocationInformationService.getInfo();
      if (!browserInfo.ip_address || browserInfo.ip_address === 'undefined') {
        browserInfo.ip_address = '118.70.124.48';
      }
      let newRequest;
      if (!accessToken) {
        newRequest = req.clone({
          headers: req.headers,
          body: {
            ...req.body,
            device: browserInfo.device,
            ip_address: browserInfo.ip_address
          }
        });
        newRequest.headers = newRequest.headers.append(
          "Signature",
          this.hashValue(newRequest.body)
        );
      } else {
        if (!this.ignoreAPI.includes(req.url)) {
          let headers = req.headers.set('Authorization', 'Bearer ' + accessToken);
          headers = headers
            .append('Cache-Control', 'no-cache')
            .append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
            .append('Access-Control-Allow-Origin', '*')
            .append('Cache-Control', 'no-store')
            .append('Expires', '0')
            .append('Pragma', 'no-cache')
            .append('merchantKey', 'sxTHuGzau8k1rssqrje3');
          newRequest = req.clone({
            headers,
            body: {
              ...req.body,
              device: browserInfo.device,
              ip_address: browserInfo.ip_address
            }
          });
          newRequest.headers = newRequest.headers.append(
            "Signature",
            this.hashValue(newRequest.body, accessToken)
          );
        } else {
          let headers = req.headers.set('Authorization', 'Bearer ' + accessToken);
          headers = headers
            .append('Cache-Control', 'no-cache')
            .append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
            .append('Access-Control-Allow-Origin', '*')
            .append('Cache-Control', 'no-store')
            .append('Expires', '0')
            .append('Pragma', 'no-cache');
          newRequest = req.clone({
            headers,
            body: req.body,
          });
          const formData = req.body as FormData;
          const value = formData.get("req") as string;
          newRequest.headers = newRequest.headers.append(
            "Signature",
            this.hashValueString(value, accessToken)
          );
        }
      }
      return next.handle(newRequest).pipe(
        map((event: HttpEvent<any>) => {
          return event;
        }),
        catchError((error: HttpErrorResponse) => {
          if (error.status === 302) {
            localStorage.clear();
            this.authService.logOut();
            this.router.navigate(['login'], {
              queryParams: { returnUrl: this.router.url }
            });
          }
          if (error.status === 401 && !req.url.includes('login')) {
            localStorage.clear();
            this.authService.logOut();
            this.router.navigate(['login'], {
              queryParams: { returnUrl: this.router.url }
            });
          }
          if (error.status === 403 && !req.url.includes("login")) {
            this.dialog.closeAll();
            this.router.navigate(["error-403"]);
            // this.toastr.error(this.translate.instant("function-role"));
          }
          return throwError(error);
        })
      );
    }
  }

  hashValue(body: any, token?: string): string {
    const hashValue = JSON.stringify(body) + SIGNATURE_KEY + (token ? token : '');
    const md5 = new Md5();
    return md5.appendStr(hashValue).end().toString();
  }

  hashValueString(body: string, token?: string): string {
    const hashValue = body + SIGNATURE_KEY + (token ? token : '');
    const md5 = new Md5();
    return md5.appendStr(hashValue).end().toString();
  }
}

