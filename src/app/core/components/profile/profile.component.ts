import { ToastrService } from "ngx-toastr";
import { LocalStorageType } from "./../../constants/local-constant.constants";
import { Component, OnInit } from "@angular/core";
import {
  BackgroundLoader,
  AuthenticationAndAuthorizationService,
  ProfileShare,
  ProfileService,
} from "@core/services";
import { UserInformationModel } from "@core/models";
import { DefaultAvatar, LANGS } from "@core/constants";
import { MatDialog } from "@angular/material/dialog";
import { ProfileModalComponent } from "./profile-modal/profile-modal.component";
import { ChangeAvatarModalComponent } from "./change-avatar-modal/change-avatar-modal.component";
import { ChangePasswordComponent } from "@core/layout/topbar/change-password/change-password.component";
import { Profile } from "@core/models/App/profile/profile.model";
import { Subscription } from "rxjs";
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: "ite-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  defaultLang: any;
  user: UserInformationModel;
  public profile: Profile;
  // tslint:disable-next-line: variable-name
  private _profileImage: string | null = null;
  userInformation: UserInformationModel;
  editFlag = false;
  langs = [];
  language: any;
  history = [];
  isSeeMore = false;
  page = 1;
  pageSize = 5;
  subscription: Subscription;

  constructor(
    private loader: BackgroundLoader,
    private userService: AuthenticationAndAuthorizationService,
    public dialog: MatDialog,
    private profileShareService: ProfileShare,
    private profileService: ProfileService,
    private toastr: ToastrService,
    private translateService: TranslateService
  ) {
    this.user = this.userService.getUserInformation();
    this.subscription = this.profileShareService
      .getProfileInfo()
      .subscribe((profile) => {
        if (profile) {
          this._profileImage = profile.avatarUrl;
        }
      });
    this.langs = LANGS;
  }

  ngOnInit() {
    this.getDetailProfile();
    this.getHistory(this.page);
  }

  public get profileImage(): string {
    return this._profileImage;
  }

  public get defaultAvatar(): string {
    return DefaultAvatar.toString();
  }

  public getDetailProfile() {
    this.profileService.detailProfile().subscribe((value) => {
      if (value.error_code === "00") {
        this.profile = value.data;
        this._profileImage = this.profile.avatar
          ? this.profile.avatar
          : DefaultAvatar.toString();
        if (this.profile.language === "vn") {
          this.profile.language = "vi";
        }
        this.language = this.langs.filter(
          (i) => i.value === this.profile.language
        )[0];
      }
    });
  }

  getUserInformation(): string {
    return JSON.parse(localStorage.getItem(LocalStorageType.DefaultLanguage));
  }

  public editProfile(): void {
    const dialogRef = this.dialog.open(ProfileModalComponent, {
      width: "400px",
      disableClose: true,
      data: {
        profile: this.profile,
        langs: this.langs,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getDetailProfile();
        this.getHistory(this.page);
      }
    });
  }

  public openChangeImg(): void {
    const dialogRef = this.dialog.open(ChangeAvatarModalComponent, {
      data: { userId: this.user.id, avatar: this.profile.avatar },
      width: "500px",
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.userInformation = this.userService.getUserInformation();
      this._profileImage = this.userInformation.thumbnailPhoto;
      if (result) {
        this.toastr.success(this.getTranslation("changeimage.success"));
      }
    });
  }

  public openChangePasswordModal() {
    this.dialog.open(ChangePasswordComponent, {
      data: { userId: 15 },
    });
  }

  public getHistory(num: number, isSeeMore: boolean = false) {
    const body = {
      page: num,
      size: this.pageSize,
    };
    this.profileService.getActivityHistory(body).subscribe((data) => {
      if (
        data.error_message.toLocaleLowerCase() === "success" &&
        data.error_code === "00"
      ) {
        this.history = isSeeMore
          ? this.history.concat(data.list_data)
          : data.list_data;
        this.isSeeMore = this.history?.length < data.total_record;
        this.loader.hide();
      }
    });
  }

  public seeMore() {
    this.page++;
    this.getHistory(this.page, true);
  }

  getTranslation(key) {
    return this.translateService.instant(key);
  }
}
