import { Component, OnInit, AfterViewInit } from "@angular/core";
import {
  BackgroundLoader,
  BrowserAndLocationInformationService,
  AuthenticationAndAuthorizationService,
} from "@core/services";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TranslateService, LangChangeEvent } from "@ngx-translate/core";
import {
  langSettings,
  LocalStorageType,
  CommonErrorCode,
} from "@core/constants";

@Component({
  selector: "ite-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, AfterViewInit {
  public user = {
    userName: "",
    password: "",
    remember_me: false,
  };
  public showPw = false;
  public isChecked = false;
  public langSetting = langSettings;
  public submitted = false;
  public error_message = "";
  public commonErrorCode = CommonErrorCode;
  public flag: string;
  model: any = {};
  public loginForm: FormGroup;
  returnUrl;
  noRedirect = false;
  currentErrorCode = "";
  ngAfterViewInit(): void {
    this.loader.hide();
  }

  constructor(
    private loader: BackgroundLoader,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private authService: AuthenticationAndAuthorizationService,
    protected browserInfoService: BrowserAndLocationInformationService,
    public fb: FormBuilder,
    public translate: TranslateService
  ) {
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || "/";
    this.noRedirect =
      this.activatedRoute.snapshot.queryParams.noRedirect === "true";
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      remember_me: [""],
    });
    if (localStorage.getItem(LocalStorageType.RememberMe)) {
      let jsonObject = JSON.parse(
        localStorage.getItem(LocalStorageType.RememberMe)
      );
      this.isChecked = true;
      this.loginForm = this.fb.group({
        username: [jsonObject.acc, Validators.required],
        password: [jsonObject.pass, Validators.required],
        remember_me: [this.isChecked],
      });
    }
  }

  ngOnInit() {
    if (this.authService.checkLogin()) {
      this.route.navigateByUrl(this.returnUrl);
      return;
    }
    this.authService.logOut();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (this.currentErrorCode) {
        this.error_message = this.translate.instant(this.currentErrorCode);
      }
    });
    if (localStorage.getItem(LocalStorageType.LoginLanguage)) {
      this.changeLang(localStorage.getItem(LocalStorageType.LoginLanguage));
    } else {
      this.changeLang("vi");
    }
  }
  register() {
    //this.route.navigate(['forgot-password']);
  }
  redirect() {
    this.route.navigate(["forgot-password"]);
  }
  setValue(e) {
    this.loginForm.value.remember_me = e.target.checked;
  }
  changeLang(lang: string) {
    localStorage.setItem(LocalStorageType.LoginLanguage, lang);
    this.flag = this.getLangSetting(lang).flag;
    this.translate.use(lang);
  }
  public getLangSetting(langCode: string): any {
    if (langCode === "vi") {
      return this.langSetting[0];
    } else {
      return this.langSetting[1];
    }
  }
  saveInfoRemember(isChecked: boolean = false) {
    if (isChecked) {
      let inforRemember = {
        acc: this.loginForm.value.username,
        pass: this.loginForm.value.password,
      };
      localStorage.setItem(
        LocalStorageType.RememberMe,
        JSON.stringify(inforRemember)
      );
      return;
    }
    localStorage.removeItem(LocalStorageType.RememberMe);
    return;
  }
  togglePw() {
    this.showPw = !this.showPw;
    if (this.showPw) {
      setTimeout(() => {
        this.showPw = false;
      }, 2000);
    }
  }
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    const form = this.loginForm.value;
    this.error_message = "";
    if (this.loginForm.invalid) {
      return;
    }

    this.authService
      .doLogin(form.username.trim(), form.password.trim())
      .subscribe((data: any) => {
        if (typeof data !== "string") {
          this.loader.hide();
          const config = this.authService.getSideBarConfig();
          let url;
          if (config && config.length) {
            const child = config[0].children;
            if (child) {
              url = this.authService.getUrlFromId(child[0].menu_id);
            } else {
              url = this.authService.getUrlFromId(config[0].menu_id);
            }
            localStorage.setItem(LocalStorageType.DefaultUrl, url);
          }
          if (data.is_change_password === 1) {
            this.route.navigate(["change-password-login"]);
            return;
          }
          this.saveInfoRemember(form.remember_me);
          url = '/admin/batch-file';
          this.route.navigateByUrl(url);
        } else {
          this.error_message = this.translate.instant(
            `error_code.login.error_${data}`
          );
          this.currentErrorCode = `error_code.login.error_${data}`;
        }
      });
  }

  enter($event) {
    this.loginForm.markAllAsTouched();
    this.onSubmit();
    $event.preventDefault();
  }
}
