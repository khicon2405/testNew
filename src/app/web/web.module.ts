import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared/shared.module";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { ProfileComponent } from "../core/components/profile/profile.component";
import { NotificationListComponent } from "@core/layout/topbar/notification/notification-list/notification-list.component";
import { TitleConstants, LocalStorageType } from "@core/constants";
import { DocumentViewerComponent } from "@core/components/common/document-viewer/document-viewer.component";
import { NotificationDetailComponent } from "@core/layout/topbar/notification/notification-detail/notification-detail.component";

const defaultUrl = localStorage.getItem(LocalStorageType.DefaultUrl)
  ? localStorage.getItem(LocalStorageType.DefaultUrl)
  : "/login";

const routes: Routes = [
  { path: "", redirectTo: defaultUrl, pathMatch: "full" },
  {
    path: "admin",
    children: [
      { path: "", redirectTo: defaultUrl, pathMatch: "full" },
      {
        path: "batch-file",
        loadChildren: () =>
          import("./batch-file-manager/batch-file-manager.module").then(
            (m) => m.BatchFileManagerModule
          ),
        data: {
          preload: true,
        },
      },
      {
        path: "non-financial-reconcile",
        loadChildren: () =>
          import(
            "./non-financial-reconcile/non-financial-reconcile.module"
          ).then((m) => m.NonFinancialReconcileModule),
        data: {
          preload: true,
        },
      },
      {
        path: "wallet-financial-reconcile",
        loadChildren: () =>
          import(
            "./wallet-financial-reconcile/wallet-financial-reconcile.module"
          ).then((m) => m.WalletReconcileModule),
        data: {
          preload: true,
        },
      },
      {
        path: "paygate-financial-reconcile",
        loadChildren: () =>
          import(
            "./paygate-financial-reconcile/paygate-financial-reconcile.module"
          ).then((m) => m.PaygateReconcileModule),
        data: {
          preload: true,
        },
      },
      {
        path: "reconcile-report",
        loadChildren: () =>
          import("./reconcile-report/reconcile-report.module").then(
            (m) => m.ReconcileReportModule
          ),
        data: {
          preload: true,
        },
      },
      {
        path: "payment-transaction-report",
        loadChildren: () =>
          import(
            "./payment-transaction-report/payment-transaction-report.module"
          ).then((m) => m.PaymentTransactionReportModule),
        data: {
          preload: true,
        },
      },
      {
        path: "financial-transaction-report",
        loadChildren: () =>
          import(
            "./financial-transactions-report/financial-transactions-report.module"
          ).then((m) => m.FinancialTransactionsReportModule),
        data: {
          preload: true,
        },
      },
      {
        path: "non-financial-transaction-report",
        loadChildren: () =>
          import(
            "./non-financial-transactions-report/non-financial-transactions-report.module"
          ).then((m) => m.NonFinancialTransactionsReportModule),
        data: {
          preload: true,
        },
      },
      {
        path: "lookup-transaction-payment",
        loadChildren: () =>
          import("./lookup-trans-payment/lookup-trans-payment.module").then(
            (m) => m.LookupTransPaymentModule
          ),
        data: {
          preload: true,
        },
      },
      {
        path: "lookup-transaction-refund",
        loadChildren: () =>
          import("./lookup-trans-refund/lookup-trans-refund.module").then(
            (m) => m.LookupTransRefundModule
          ),
        data: {
          preload: true,
        },
      },
      {
        path: "reconcile-manager",
        loadChildren: () =>
          import("./manager-reconcile/manager-reconcile.module").then(
            (m) => m.ManagerReconcileModule
          ),
        data: {
          preload: true,
        },
      },
      // {
      //   path: "notification",
      //   children: [
      //     {
      //       path: "",
      //       component: NotificationListComponent,
      //       data: {
      //         title: TitleConstants.NOTIFICATION,
      //       },
      //     },
      //     {
      //       path: "detail/:id",
      //       component: NotificationDetailComponent,
      //       data: {
      //         title: TitleConstants.NOTIFICATION,
      //       },
      //     },
      //   ],
      // },
      // Tài khoản đảm bảo ví
      // {
      //   path: 'secured-account',
      //   loadChildren: () =>
      //     import('./secured-account/secured-account.module').then(
      //       (m) => m.SecuredAccountModule
      //     ),
      //   data: {
      //     preload: true,
      //   },
      // },
    ],
  },
  // {
  //   path: "profile",
  //   component: ProfileComponent,
  // },
  { path: "**", redirectTo: "page-not-found" },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PdfViewerModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  declarations: [
    ProfileComponent,
    NotificationListComponent,
    NotificationDetailComponent,
    DocumentViewerComponent,
  ],
})
export class WebModule {}
