import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class ProfileShare {
  private profileInstance = new Subject<any>();
  setProfileInfo(avatarUrl: string, profileName: string) {
    this.profileInstance.next({
      avatarUrl,
      profileName,
    });
  }
  clearProfile() {
    this.profileInstance.next();
  }
  getProfileInfo(): Observable<any> {
    return this.profileInstance.asObservable();
  }
}
