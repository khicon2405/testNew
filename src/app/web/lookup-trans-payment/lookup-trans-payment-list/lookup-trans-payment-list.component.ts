import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";
import { CommonConstants, DATE_CONFIG, RECONCILE } from "@core/constants";
import { LookupTransactionService } from "@core/services";
import { MatDialog } from "@angular/material/dialog";
import * as moment from "moment";
import { DialogNotificationComponent } from "../../../core/components/common/dialogs/dialog-notification/dialog-notification.component";

@Component({
  selector: "ite-lookup-trans-payment-list",
  templateUrl: "./lookup-trans-payment-list.component.html",
  styleUrls: ["./lookup-trans-payment-list.component.scss"],
})
export class LookupTransPaymentListComponent implements OnInit {
  public dataTable = [];
  public searchForm: FormGroup;
  public page: number = CommonConstants.DEFAULT_PAGE_INDEX;
  public pageSize: number = CommonConstants.DEFAULT_PAGE_SIZE;
  public total: number;
  public loading = true;
  public searchRequest: any = {};
  public dateConfig = DATE_CONFIG;
  public transTypeLists = [];
  public paymentMethodsLists = [];
  public statusLists = [];
  public channelLists = [];
  public currentDay = new Date();
  public allSelService = false;
  public allSelMethods = false;
  public allSelReconcile = false;
  public allSelChannel = false;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog,
    public lookupService: LookupTransactionService
  ) {
    this.searchForm = this.fb.group({
      listTransType: [],
      listPaymentMethods: [],
      listChannel: [],
      listStatus: [],
      textSearch: "",
      fromDate: new Date(
        this.currentDay.getFullYear(),
        this.currentDay.getMonth(),
        1
      ),
      toDate: this.currentDay,
    });
    this.transTypeLists = RECONCILE.PAYGATE_TRANS_TYPE;
    this.paymentMethodsLists = RECONCILE.PAYGATE_TRANS_METHOD;
    this.channelLists = RECONCILE.TRADING_CHANNEL;
    this.statusLists = RECONCILE.STATUS_TRANS;
  }
  ngOnInit(): void {
    this.initData();
  }
  initData() {
    this.toggleAllService();
    this.searchData();
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
    if (form.listPaymentMethods) {
      this.searchRequest.listPaymentMethods = form.listPaymentMethods.filter(
        (x) => x != ""
      );
    }
    if (form.listChannel) {
      this.searchRequest.listChannel = form.listChannel.filter((x) => x != "");
    }
    if (form.listStatus) {
      this.searchRequest.listStatus = form.listStatus.filter((x) => x != "");
    }
    if (form.textSearch) {
      this.searchRequest.textSearch = form.textSearch.trim();
    }
    if (!form.fromDate) {
      this.searchForm
        .get("fromDate")
        .setValue(
          new Date(this.currentDay.getFullYear(), this.currentDay.getMonth(), 1)
        );
    }
    this.searchRequest.fromDate = moment(
      this.searchForm.value.fromDate.setHours(7, 0, 0)
    ).toISOString();
    if (!form.toDate) {
      this.searchForm.get("toDate").setValue(this.currentDay);
    }
    this.searchRequest.toDate = moment(
      new Date(this.searchForm.value.toDate).setDate(
        this.searchForm.value.toDate.getDate() + 1
      )
    ).toISOString();
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
  searchData() {
    let request = this.getFromData();
    if (request != null) {
      this.getDataTable(request);
    }
  }
  showModal(title, message) {
    const dialogRef = this.dialog.open(DialogNotificationComponent, {
      width: "400px",
      disableClose: true,
      data: { title, message },
    });

    dialogRef.afterClosed().subscribe((result) => {});
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
    if (!this.allSelChannel) {
      this.searchForm.controls.listPaymentMethods.patchValue([
        ...this.paymentMethodsLists.map((item) => item.value),
        "",
      ]);
      this.allSelChannel = true;
    } else {
      this.searchForm.controls.listPaymentMethods.patchValue([]);
      this.allSelChannel = false;
    }
  }
  toggleAllChannel() {
    if (!this.allSelReconcile) {
      this.searchForm.controls.listChannel.patchValue([
        ...this.channelLists.map((item) => item.value),
        "",
      ]);
      this.allSelReconcile = true;
    } else {
      this.searchForm.controls.listChannel.patchValue([]);
      this.allSelReconcile = false;
    }
  }
  toggleAllStatus() {
    if (!this.allSelReconcile) {
      this.searchForm.controls.listStatus.patchValue([
        ...this.statusLists.map((item) => item.value),
        "",
      ]);
      this.allSelReconcile = true;
    } else {
      this.searchForm.controls.listStatus.patchValue([]);
      this.allSelReconcile = false;
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
    this.lookupService.getListLookupTransPayment(request).subscribe((data) => {
      this.dataTable = data.data ? data.data : [];
      this.total = data.totalRecords;
      this.loading = false;
    });
  }
  exportFileExcel() {
    let request = this.getFromData();
    if (request != null) {
      this.lookupService.exportLookupTransPayment(request);
    }
  }
  viewDetail(item) {
    this.router.navigate([`admin/lookup-transaction-payment/details/${item}`]);
  }
  formatMoney(str: any, n, x) {
    try {
      var re = "(\\d)(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")";
      return parseInt(str).toFixed(n).replace(new RegExp(re, "g"), "$1,");
    } catch {}
    return str;
  }
}
