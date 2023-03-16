import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { ConfigService } from '@core/services/configuration/configuration.service';

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  baseUrl = "";

  public notificationAmount: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  constructor(private http: HttpClient, private config: ConfigService) {
    this.baseUrl =
      (this.config &&
      this.config.config &&
      this.config.config.API_ENDPOINTS &&
      this.config.config.API_ENDPOINTS.REAL_API_URL_2
        ? this.config.config.API_ENDPOINTS.REAL_API_URL_2
        : '');
  }

  public getNotification(body): Observable<any> {
    return this.http.post(`${this.baseUrl}/notifications/get-all`, body).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  public getById(id): Observable<any> {
    const body = {
      id: id,
    };
    return this.http.post(`${this.baseUrl}/notifications/detail`, body).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  public getNewestNotification(body): Observable<any> {
    return this.http.post(`${this.baseUrl}/notifications/get-new`, body);
  }

  public markAllAsRead(): Observable<any> {
    return this.http.post(`${this.baseUrl}/notifications/read-all`, {});
  }

  public markAsReadOrUnread(body): Observable<any> {
    return this.http.post(`${this.baseUrl}/notifications/read`, body);
  }

  public delete(body): Observable<any> {
    return this.http.post(`${this.baseUrl}/notifications/delete`, body);
  }

  public getNotificationAmount(): Observable<any> {
    return this.notificationAmount.asObservable();
  }

  public setNotificationAmount(data: any) {
    this.notificationAmount.next(data);
  }

  public getUrl(item) {
    let url = "";
    // switch (item.target) {
    //   case "AGENCY": {
    //     url = "admin/agency-profile";
    //     break;
    //   }
    // }
    if (item.target === 'AGENCY') {
      url = "admin/agency-profile";
    }
    return url;
  }
}
