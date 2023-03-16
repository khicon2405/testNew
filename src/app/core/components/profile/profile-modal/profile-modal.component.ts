import { UserInformationModel } from "./../../../models/user.model";
import { LocalStorageType } from "./../../../constants/local-constant.constants";
import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ToastrService } from "ngx-toastr";
import { BackgroundLoader, ProfileShare } from "@core/services";
import { ProfileService } from "@core/services/app/profile/profile.service";
import { LocalizeService } from "@core/localization";
import { CommonErrorCode } from "@core/constants";
import { FormValidators } from "src/app/shared/validators";

@Component({
  selector: "ite-profile-modal",
  templateUrl: "./profile-modal.component.html",
  styleUrls: ["./profile-modal.component.scss"],
})
export class ProfileModalComponent implements OnInit {
  public user: any;
  public profileForm: FormGroup;
  public isLoading: boolean;
  public commonErrorCode = CommonErrorCode;
  public languageList = [];
  constructor(
    public dialogRef: MatDialogRef<ProfileModalComponent>,
    private localizeService: LocalizeService,
    private profileService: ProfileService,
    private loader: BackgroundLoader,
    private toastService: ToastrService,
    private fb: FormBuilder,
    private profile: ProfileShare,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.user = this.data?.profile;
    this.languageList = this.data?.langs;
  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      fullname: this.fb.control("", [
        Validators.required,
        FormValidators.nameSpace,
      ]),
      phone: this.fb.control("", [
        Validators.required,
        FormValidators.telephone,
      ]),
      language: this.fb.control(""),
      email: this.fb.control({ value: "", disabled: true }),
      username: this.fb.control({ value: "", disabled: true }),
      created_date: this.fb.control({ value: "", disabled: true }),
    });
    if (this.user && Object.keys(this.user).length > 0) {
      this.profileForm.patchValue(this.user);
    }
  }

  get f() {
    return this.profileForm.controls;
  }
  trimData(e) {
    e.target.value = e.target.value.trim();
  }
  getUserInformation(): UserInformationModel {
    return JSON.parse(localStorage.getItem(LocalStorageType.UserInformation));
  }
  cancel(isSuccess) {
    this.dialogRef.close(isSuccess);
  }

  public onSubmit() {
    if (this.profileForm.valid) {
      this.profileService
        .updateProfile(this.profileForm.value)
        .subscribe((result) => {
          if (
            result.error_code === "00" &&
            result.error_message.toLocaleLowerCase() === "success"
          ) {
            this.cancel(true);
            const message = this.localizeService.instant(
              "profileAccount.validator.success"
            );
            const currentUser = this.getUserInformation();
            if (currentUser) {
              this.profile.setProfileInfo(
                currentUser.thumbnailPhoto,
                this.profileForm.value.fullname
              );
              currentUser.displayName = this.profileForm.value.fullname;
              localStorage.setItem(
                LocalStorageType.UserInformation,
                JSON.stringify(currentUser)
              );
            }
            this.toastService.success(message);
          }
        });
    }
  }

  enter($event) {
    this.profileForm.markAllAsTouched();
    this.onSubmit();
    $event.preventDefault();
  }
}
