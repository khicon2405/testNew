import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { defineLocale, enGbLocale } from "ngx-bootstrap/chronos";
import { RouterModule, Routes } from "@angular/router";
import { AccordionModule } from "ngx-bootstrap/accordion";
import {
  BsDatepickerModule,
  BsLocaleService,
  DatepickerModule,
} from "ngx-bootstrap/datepicker";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { TranslateService } from "@ngx-translate/core";
import { LocalStorageType, TitleConstants } from "@core/constants";
import { NonFinancialTransactionsReportComponent } from "./non-financial-transactions-report.component";

defineLocale("en", enGbLocale);
const routes: Routes = [
  {
    path: "",
    component: NonFinancialTransactionsReportComponent,
    resolve: {},
    data: {
      title: TitleConstants.WALLET_TRANSACTION,
    },
  },
];

@NgModule({
  declarations: [NonFinancialTransactionsReportComponent],
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
export class NonFinancialTransactionsReportModule {
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
