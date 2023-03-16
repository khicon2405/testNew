import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { CommonConstants, DATE_CONFIG, RECONCILE } from "@core/constants";
import {
  WalletService,
  BatchFileService,
  BambooReconcileService,
} from "@core/services";
import { CommonService } from "@core/services/app/common/common.service";
import { TranslateService } from "@ngx-translate/core";
import { ToastrService } from "ngx-toastr";
import { MatDialog } from "@angular/material/dialog";
import { DialogNotificationComponent } from "../../../core/components/common/dialogs/dialog-notification/dialog-notification.component";
import * as moment from "moment";

@Component({
  selector: "ite-paygate-financial-reconcile-list",
  templateUrl: "./paygate-financial-reconcile-list.component.html",
  styleUrls: ["./paygate-financial-reconcile-list.component.scss"],
})
export class PaygateFinancialReconcileListComponent implements OnInit {
  public dataTable = [];
  public searchForm: FormGroup;
  public page: number = CommonConstants.DEFAULT_PAGE_INDEX;
  public pageSize: number = CommonConstants.DEFAULT_PAGE_SIZE;
  public total: number;
  public loading = true;
  public paymentMethods = [];
  public reconcileCode = [];
  public transChannels = [];
  public transTypeLists = [];
  public searchRequest: any = {};
  public dateConfig = DATE_CONFIG;
  public currentDay = new Date();
  public allSelService = false;
  public allSelMethods = false;
  public allSelChannel = false;
  public allSelReconcile = false;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private walletService: WalletService,
    private commonService: CommonService,
    private toastr: ToastrService,
    public dialog: MatDialog,
    public translate: TranslateService,
    public batchFileService: BatchFileService,
    public bambooService: BambooReconcileService
  ) {
    this.searchForm = this.fb.group({
      listTransType: [],
      listTransChannel: [],
      listReconcileCode: [],
      listPaymentMethods: [],
      fromDate: new Date(
        this.currentDay.getFullYear(),
        this.currentDay.getMonth(),
        1
      ),
      toDate: this.currentDay,
      textSearch: [],
    });
    this.reconcileCode = RECONCILE.RECONCILE_CODE;
    this.transChannels = RECONCILE.TRADING_CHANNEL;
    this.transTypeLists = RECONCILE.PAYGATE_TRANS_TYPE;
    this.paymentMethods = RECONCILE.PAYGATE_TRANS_PAYMENT_METHODS;
  }

  ngOnInit(): void {
    this.initData();
  }
  initData() {
    this.toggleAllService();
    this.searchData();
  }
  searchData() {
    let request = this.getFromData();
    if (request != null) {
      this.getDataTable(request);
    }
  }
  getFromData() {
    const form = this.searchForm.value;
    this.page = 1;
    this.searchRequest = {
      pageIndex: this.page,
      pageSize: this.pageSize,
    };
    if (form.listTransType) {
      this.searchRequest.listTransType = form.listTransType.filter(
        (x) => x != ""
      );
    }
    if (form.listTransChannel) {
      this.searchRequest.listChannel = form.listTransChannel.filter(
        (x) => x != ""
      );
    }
    if (form.listReconcileCode) {
      this.searchRequest.listResultCode = form.listReconcileCode.filter(
        (x) => x != ""
      );
    }
    if (form.listPaymentMethods) {
      this.searchRequest.listPaymentMethods = form.listPaymentMethods.filter(
        (x) => x != ""
      );
    }
    if (form.fromDate) {
      this.searchRequest.fromDate = moment(
        form.fromDate.setHours(7, 0, 0)
      ).toISOString();
    } else {
      this.searchForm
        .get("fromDate")
        .setValue(
          new Date(this.currentDay.getFullYear(), this.currentDay.getMonth(), 1)
        );
      this.searchRequest.fromDate = moment(
        this.searchForm.value.fromDate.setHours(7, 0, 0)
      ).toISOString();
    }
    if (form.toDate) {
      this.searchRequest.toDate = moment(
        form.toDate.setHours(7, 0, 0)
      ).toISOString();
    } else {
      this.searchForm.get("toDate").setValue(this.currentDay);
      this.searchRequest.toDate = moment(
        this.searchForm.value.toDate.setHours(7, 0, 0)
      ).toISOString();
    }
    if (form.textSearch) {
      this.searchRequest.textSearch = form.textSearch.trim();
    }

    if (this.searchForm.value.toDate < this.searchForm.value.fromDate) {
      this.showModal(
        "Thông báo",
        "Không được chọn giá trị ô từ ngày lớn hơn đến ngày."
      );
      return null;
    }
    return this.searchRequest;
  }
  showModal(title, message) {
    const dialogRef = this.dialog.open(DialogNotificationComponent, {
      width: "400px",
      disableClose: true,
      data: { title, message },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
  // checkbox
  toggleAllService() {
    if (!this.allSelService) {
      this.searchForm.controls.listTransType.patchValue([
        ...this.transTypeLists.map((item) => item.value),
        "",
      ]);
      this.allSelService = true;
    } else {
      this.searchForm.controls.listTransType.patchValue([]);
      this.allSelService = false;
    }
  }
  toggleAllMethods() {
    if (!this.allSelMethods) {
      this.searchForm.controls.listPaymentMethods.patchValue([
        ...this.paymentMethods.map((item) => item.value),
        "",
      ]);
      this.allSelMethods = true;
    } else {
      this.searchForm.controls.listPaymentMethods.patchValue([]);
      this.allSelMethods = false;
    }
  }
  toggleAllChannel() {
    if (!this.allSelChannel) {
      this.searchForm.controls.listTransChannel.patchValue([
        ...this.transChannels.map((item) => item.value),
        "",
      ]);
      this.allSelChannel = true;
    } else {
      this.searchForm.controls.listTransChannel.patchValue([]);
      this.allSelChannel = false;
    }
  }
  toggleAllReconcile() {
    if (!this.allSelReconcile) {
      this.searchForm.controls.listReconcileCode.patchValue([
        ...this.reconcileCode.map((item) => item.value),
        "",
      ]);
      this.allSelReconcile = true;
    } else {
      this.searchForm.controls.listReconcileCode.patchValue([]);
      this.allSelReconcile = false;
    }
  }
  keyPressDate(event) {
    const k = event.keyCode;
    return k === 8 || k === 191 || (k >= 47 && k <= 57);
  }
  get f() {
    return this.searchForm.controls;
  }
  isInvalidDate(event, field) {
    if (event.target.value === "Invalid date") {
      this.f[field].setValue(null);
    }
  }
  changePage(page) {
    if (this.page !== page) {
      this.page = page;
      this.searchRequest.pageIndex = this.page;
      this.searchRequest.pageSize = this.pageSize;
      this.getDataTable(this.searchRequest);
    }
  }

  onPageSizeChange(pSize) {
    this.page = 1;
    this.pageSize = pSize;
    this.searchRequest.pageIndex = this.page;
    this.searchRequest.pageSize = pSize;
    this.getDataTable(this.searchRequest);
  }

  getDataTable(request) {
    this.loading = true;
    this.dataTable = [];
    this.bambooService.getPaygateReconcileResult(request).subscribe((data) => {
      this.dataTable = data.data ? data.data : [];
      this.total = data.totalRecords;
      this.loading = false;
      // if (data.error_code === "00" || data.error_code === "02") {
      //   this.total = data.count ? data.count : 0;
      //   this.dataTable = data.listData ? data.listData : [];
      //   this.loading = false;
      // } else {
      //   this.toastr.error(
      //     this.translate.instant("wallet-cashin.errors." + data.error_code)
      //   );
      // }
    });
  }
  exportFileExcel() {
    let request = this.getFromData();
    if (request != null) {
      this.bambooService.exportPaygateReconcileResult(request);
    }
  }

  viewDetail(item: any) {
    this.router.navigate([`admin/paygate-financial-reconcile/details/${item}`]);
  }
  formatMoney(str: any, n, x) {
    try {
      var re = "(\\d)(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")";
      return parseInt(str).toFixed(n).replace(new RegExp(re, "g"), "$1,");
    } catch {}
    return str;
  }
}
