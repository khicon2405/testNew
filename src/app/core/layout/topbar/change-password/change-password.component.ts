import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { Validators, FormControl, FormGroup } from "@angular/forms";
import { FormValidators } from "src/app/shared/validators";
import { ProfileService } from "@core/services/app/profile/profile.service";
import { ToastrService } from "ngx-toastr";
import {
  BackgroundLoader,
  AuthenticationAndAuthorizationService,
} from "@core/services";
import { ProfilePassword } from "@core/models/App/profile/profile.model";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { StrengthPassword } from "../../../helper/custom-form-validator/custom-form-validator";

export interface DialogData {
  userId: string;
}

@Component({
  selector: "ite-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.scss"],
})
export class ChangePasswordComponent implements OnInit {
  public changePasswordForm: FormGroup;
  public isOldPassword = false;
  public errorList: any = {
    isMinValid: false,
    isUpper: false,
    isLower: false,
    isSpecial: false,
    isNumber: false,
    isUtf8: false,
  };
  constructor(
    public dialogRef: MatDialogRef<ChangePasswordComponent>,
    private profileService: ProfileService,
    private toastService: ToastrService,
    private loader: BackgroundLoader,
    private authService: AuthenticationAndAuthorizationService,
    private router: Router,
    private translateService: TranslateService
  ) { }

  ngOnInit() {
    const currentPassword = new FormControl("", [Validators.required]);

    const password = new FormControl("", [
      Validators.required,
      // FormValidators.passwordStrength
    ]);

    const confirmPassword = new FormControl("", [
      Validators.required,
      FormValidators.equalTo(password),
    ]);

    this.changePasswordForm = new FormGroup({
      currentPassword: currentPassword,
      password: password,
      confirmPassword: confirmPassword,
    });
  }
  get f() {
    return this.changePasswordForm.controls;
  }
  checkValue(key_event) {
    if (key_event.keycode === 8) {
      this.errorList = StrengthPassword.checkStrengthPassword(key_event.target.value);
    }
    if (key_event.target.value?.trim() !== "") {
      this.errorList = StrengthPassword.checkStrengthPassword(key_event.target.value);
    } else {
      this.errorList.isMinValid = this.errorList.isNumber = this.errorList.isSpecial = this.errorList.isUpper = this.errorList.isLower = this.errorList.isUtf8 = false;
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  public validate() {
    return (!this.errorList.isMinValid ||
      !this.errorList.isNumber ||
      !this.errorList.isSpecial ||
      !this.errorList.isUpper ||
      !this.errorList.isLower ||
      !this.errorList.isUtf8)
  }
  public onUpdate() {
    if (this.changePasswordForm.invalid) {
      return false;
    }
    if (this.validate()) {
      return;
    }
    const change_pass_request: ProfilePassword = {
      old_password: this.changePasswordForm.value.currentPassword,
      new_password: this.changePasswordForm.value.password,
    };

    this.profileService.updatePassword(change_pass_request).subscribe((res) => {
      console.log(res);
      if (res.error_code === "01") {
        this.isOldPassword = true;
        this.f.currentPassword.setErrors({ incorrect: true });
        return false;
      } else if (res.error_code === "00") {
        this.cancel(true);
        this.toastService.success(
          this.getTranslation("profileAccount.validator.successPassword")
        );
        this.authService.logOut().subscribe(() => {
          setTimeout(() => {
            return this.router.navigate(["/login"]);
          }, 500);
        });
      }
    });
  }

  cancel(isSuccess) {
    this.dialogRef.close(isSuccess);
  }

  getTranslation(key) {
    let translation = "";
    this.translateService.get(key).subscribe((data) => {
      translation = data;
    });
    return translation;
  }

  onKeydown(event) {
    const k = event.keyCode;
    if (k === 32) {
      event.preventDefault();
    }
  }
}
