import { BsLocaleService, DatepickerModule } from "ngx-bootstrap/datepicker";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { LocalStorageType, TitleConstants } from "@core/constants";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { FormsModule } from "@angular/forms";
import { AccordionModule } from "ngx-bootstrap/accordion";

import { defineLocale, viLocale, enGbLocale } from "ngx-bootstrap/chronos";
import { TranslateService } from "@ngx-translate/core";
import { LookupTransRefundDeatilComponent } from "./lookup-trans-refund-detail/lookup-trans-refund-detail.component";
import { LookupTransRefundListComponent } from "./lookup-trans-refund-list/lookup-trans-refund-list.component";
defineLocale("vi", viLocale);
defineLocale("en", enGbLocale);

const routes: Routes = [
  {
    path: "",
    resolve: {},
    children: [
      {
        path: "",
        component: LookupTransRefundListComponent,
        data: {
          title: TitleConstants.WALLET_TRANSACTION,
        },
      },
    ],
  },
  {
    path: "details/:id",
    component: LookupTransRefundDeatilComponent,
    data: {
      title: TitleConstants.WALLET_TRANSACTION,
    },
  },
];

@NgModule({
  declarations: [
    LookupTransRefundListComponent,
    LookupTransRefundDeatilComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    AccordionModule,
  ],
})
export class LookupTransRefundModule {
  constructor(
    private bsLocaleService: BsLocaleService,
    private translate: TranslateService
  ) {
    const lang = localStorage.getItem(LocalStorageType.CurrentLanguage);
    this.bsLocaleService.use(lang);
    this.translate.onLangChange.subscribe((data) => {
      this.bsLocaleService.use(data.lang);
    });
  }
}
