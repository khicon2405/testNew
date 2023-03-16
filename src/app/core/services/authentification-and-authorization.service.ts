import { Injectable } from "@angular/core";
import { UserInformationModel } from "@core/models";
import {
  LocalStorageType,
  langSettings,
  LeftMenuKeyConfig,
  FIXED_LEFT_MENU,
} from "@core/constants";
import { Observable, of } from "rxjs";
import { Md5Help } from "@core/helper";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { TranslateService } from "@ngx-translate/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ProfileShare } from "./app/profile/profile-share.service";
import * as moment from "moment";
import { ConfigService } from "./configuration/configuration.service";
import { Roles } from "@core/constants";

@Injectable({ providedIn: "root" })
export class AuthenticationAndAuthorizationService {
  private userInformation: UserInformationModel = null;
  private permissionList = [];
  private permissionUrl = [];
  private baseUrl: "";

  constructor(
    private http: HttpClient,
    private translate: TranslateService,
    private dialogRef: MatDialog,
    private route: Router,
    private profileShareService: ProfileShare,
    private config: ConfigService
  ) {
    this.baseUrl =
      this.config &&
      this.config.config &&
      this.config.config.API_ENDPOINTS &&
      this.config.config.API_ENDPOINTS.REAL_API_URL
        ? this.config.config.API_ENDPOINTS.REAL_API_URL
        : "";
    if (!this.userInformation) {
      const userInformation: string = localStorage.getItem(
        LocalStorageType.UserInformation
      );
      if (userInformation) {
        this.userInformation = JSON.parse(userInformation);
      }
    }
  }

  public getSideBarConfig(): any {
    return JSON.parse(localStorage.getItem(LocalStorageType.SideBarConfig));
  }

  public setSideBarConfig(value: string) {
    localStorage.setItem(LocalStorageType.SideBarConfig, value);
  }

  doLogin(
    userName: string,
    password: string
  ): Observable<UserInformationModel> {
    const body = {
      username: userName,
      // password: Md5Help.md5(password),
      password: password,
    };
    const getTime = moment();
    return this.http.post(`${this.baseUrl}/Authentication/login`, body).pipe(
      map((data: any) => {
        if (data.error_code && data.error_code !== "00") {
          return data.error_code;
        } else {
          // Menu cấu hình sidebar
          const sideBarConfig = JSON.stringify(FIXED_LEFT_MENU);
          this.setSideBarConfig(sideBarConfig);

          const user = new UserInformationModel(
            "1911",
            data?.user_info?.userId,
            data.user_info.fullname,
            data.user_info.username,
            192,
            data.user_info.fullname,
            data.user_info.email,
            getTime,
            data.user_info.createDate,
            data.user_info.access_token,
            "A6752CEF-0BD4-E105-7BE2-4CC65080F9F4",
            data?.user_info?.userRole,
            1192,
            data?.user_info?.listRole,
            data.user_info.role,
            data?.user_info?.listRole,
            ["1", "2"],
            true,
            true,
            data.user_info.address,
            data.user_info.avatar,
            data.user_info.phone,
            data.user_info.department_name,
            0,
            data.is_submerchant
          );
          // ngôn ngữ hiển thị mặc định do login api trả về chứ ko sync với ngôn ngữ trên topbar
          let defaultLang = data.user_info.language;
          defaultLang = defaultLang === "vn" ? "vi" : defaultLang;
          if (
            langSettings.filter((x) => x.lang_code === defaultLang).length > 0
          ) {
            this.translate.use(defaultLang);
            localStorage.setItem(LocalStorageType.CurrentLanguage, defaultLang);
          } else {
            this.translate.use("vi");
          }
          // add login result to local storage.
          this.addLoginResultToLocalStorage(user);
          this.profileShareService.setProfileInfo(
            data.user_info.avatar,
            user.displayName
          );
          return user;
        }
      })
    );
  }

  addLoginResultToLocalStorage(user: UserInformationModel) {
    this.userInformation = {
      ...user,
      userId: user.id,
      //RememberMe:user.
    };
    localStorage.setItem(
      LocalStorageType.UserInformation,
      JSON.stringify(user)
    );
    localStorage.setItem(LocalStorageType.Token, user.access_token);
    localStorage.setItem(LocalStorageType.RefreshToken, user.refresh_token);
  }

  public logOut(): Observable<boolean> {
    console.log("logOut");
    this.userInformation = null;
    let remember = null;
    if (localStorage.getItem(LocalStorageType.RememberMe)) {
      remember = localStorage.getItem(LocalStorageType.RememberMe);
    }
    localStorage.clear();
    if (remember != null) {
      localStorage.setItem(LocalStorageType.RememberMe, remember);
    }
    this.dialogRef.closeAll();
    this.clearPermissionAndURLList();
    return of(true);
    // return this.http.post(`${this.baseUrl}/logout`, {}).pipe(
    //   map((data: any) => {
    //     this.userInformation = null;
    //     let remember = null;
    //     if (localStorage.getItem(LocalStorageType.RememberMe)) {
    //       remember = localStorage.getItem(LocalStorageType.RememberMe);
    //     }
    //     localStorage.clear();
    //     if (remember != null) {
    //       localStorage.setItem(LocalStorageType.RememberMe, remember);
    //     }
    //     this.dialogRef.closeAll();
    //     this.clearPermissionAndURLList();
    //     return true;
    //   })
    // );
  }

  public checkLogin(): boolean {
    const user: any = JSON.parse(
      localStorage.getItem(LocalStorageType.UserInformation)
    );
    return user && +user.is_change_password === 0;
  }

  getUserInformation(): UserInformationModel {
    return JSON.parse(localStorage.getItem(LocalStorageType.UserInformation));
  }

  public getCurrentLang(): string {
    return localStorage.getItem(LocalStorageType.CurrentLanguage)
      ? localStorage.getItem(LocalStorageType.CurrentLanguage)
      : "vi";
  }

  public getUrlFromId(id): string {
    let result = LeftMenuKeyConfig.filter((x) => x.menuId === id);
    return result.length > 0 ? result[0].url : "";
  }

  public clearPermissionAndURLList() {
    this.permissionList = [];
    this.permissionUrl = [];
  }
  public checkPermission(permissionId: any) {
    const permissionList = JSON.parse(
      localStorage.getItem(LocalStorageType.Permission)
    );
    return permissionList?.filter((x) => x === permissionId).length > 0;
  }
  public checkPermissionUrl(permissionUrl: string) {
    if (permissionUrl === "" || permissionUrl === "/") {
      return true;
    } else {
      const permissionUrlList = JSON.parse(
        localStorage.getItem(LocalStorageType.PermissionUrl)
      );
      return (
        permissionUrlList?.filter((x: string) => permissionUrl.startsWith(x))
          .length > 0
      );
    }
  }
  public addPermission(permissionId: any) {
    this.permissionList.push(permissionId);
  }
  public addPermissionUrl(permissionUrl: any) {
    this.permissionUrl.push(permissionUrl);
  }
}
