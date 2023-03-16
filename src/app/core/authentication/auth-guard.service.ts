import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild,
} from "@angular/router";
import { LocalStorageType, SESSION_TIME } from "@core/constants";
import { AuthenticationAndAuthorizationService } from "@core/services";
import * as moment from "moment";
import { MatDialog } from "@angular/material/dialog";

@Injectable()
export class AuthGuardService implements CanActivateChild {
  constructor(
    private router: Router,
    private authService: AuthenticationAndAuthorizationService,
    private dialogRef: MatDialog
  ) {}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.checkLogin() && this.checkSessionTimeout()) {
      return true;
    }
    this.router.navigate(["login"], { queryParams: { noRedirect: true } });
    return false;
  }

  checkSessionTimeout() {
    const currentTime = moment().toDate().getTime();
    const userInformation = JSON.parse(
      localStorage.getItem(LocalStorageType.UserInformation)
    );
    const loginTime = moment(userInformation.lastLoginDate).toDate().getTime();
    if (currentTime - loginTime > SESSION_TIME * 60 * 1000) {
      localStorage.clear();
      this.dialogRef.closeAll();
      this.authService.clearPermissionAndURLList();
      return false;
    } else {
      localStorage.setItem(LocalStorageType.SessionTimeOut, currentTime + "");
      return true;
    }
  }
}
