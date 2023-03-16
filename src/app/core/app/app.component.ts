import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd, RouterEvent } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { TitleConstants, LocalStorageType } from "../constants";
import { TranslateService } from "@ngx-translate/core";
import {
  BrowserAndLocationInformationService,
  AuthenticationAndAuthorizationService,
} from "@core/services";

@Component({
  selector: "ite-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private titleService: Title,
    public translate: TranslateService,
    public browserService: BrowserAndLocationInformationService,
    public authenticationService: AuthenticationAndAuthorizationService
  ) {
    translate.addLangs(["en", "vi"]);
    const lang = localStorage.getItem(LocalStorageType.CurrentLanguage)
      ? localStorage.getItem(LocalStorageType.CurrentLanguage)
      : "vi";
    translate.setDefaultLang(lang);
    translate.use(lang);
    this.browserService.setInfoToStorage();
  }
  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
    if (!this.detectRefresh()) {
      console.log("detech refresh");
      this.authenticationService.logOut();
    }
  }
  detectRefresh() {
    if (performance.navigation.type === 1) {
      return true;
    } else {
      return false;
    }
  }
  public doBeforeUnload(): void {
    this.detectRefresh();
  }
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationEnd) {
      if (!event.url) {
        this.router.navigate(["login"]);
      }
      this.setTitle(this.router);
      window.scrollTo(0, 0);
    }
  }

  private setTitle(router: Router) {
    const titleArray = this.getTitle(
      router.routerState,
      router.routerState.root
    );
    // if (titleArray && titleArray.length > 0) {
    //   this.titleService.setTitle(titleArray[titleArray.length - 1]);
    // } else {
    //   this.titleService.setTitle(TitleConstants.BASE);
    // }
    this.titleService.setTitle(TitleConstants.BASE);
  }

  private getTitle(state, parent) {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(...this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }
}
