import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { ConfigService } from '@core/services/configuration/configuration.service';
@Injectable({
  providedIn: "root",
})
export class UserService {
  baseUrl = "";

  constructor(
    private http: HttpClient,
    private config: ConfigService) {
      this.baseUrl =
        (this.config &&
        this.config.config &&
        this.config.config.API_ENDPOINTS &&
        this.config.config.API_ENDPOINTS.REAL_API_URL_2
          ? this.config.config.API_ENDPOINTS.REAL_API_URL_2
          : '');
    }

  changeAvatar(file: File, browserInfo: any): Observable<any> {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("req", JSON.stringify(browserInfo));
    return this.http
      .post(`${this.baseUrl}/profile/edit-avatar`, formData)
      .pipe(
        map((data: any) => {

          return data;
        })
      );
  }
}
