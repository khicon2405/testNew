import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { CommonConstants, DATE_CONFIG, RECONCILE } from "@core/constants";
import { BambooReconcileService } from "@core/services";
import { DialogNotificationComponent } from "../../core/components/common/dialogs/dialog-notification/dialog-notification.component";
import { MatDialog } from "@angular/material/dialog";
import * as moment from "moment";

@Component({
  selector: "ite-non-financial-transactions-report",
  templateUrl: "./non-financial-transactions-report.component.html",
  styleUrls: ["./non-financial-transactions-report.component.scss"],
})
export class NonFinancialTransactionsReportComponent implements OnInit {
  public loading = true;
  public searchForm: FormGroup;
  public transTypeLists = [];
  public searchRequest: any = {};
  public dateConfig = DATE_CONFIG;
  public currentDay = new Date();
  public listResultCode00: [];
  public listResultCode03: [];
  public listResultCode30: [];
  public allSelected = false;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public bambooService: BambooReconcileService
  ) {
    this.searchForm = this.fb.group({
      listTransType: [],
      toDate: this.currentDay,
      fromDate: new Date(
        this.currentDay.getFullYear(),
        this.currentDay.getMonth(),
        1
      ),
    });
    this.transTypeLists = RECONCILE.NON_FINANCIAL_TRANS_TYPE;
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
    console.log("data", event.target.value);
    this.searchData();
  }

  ngOnInit(): void {
    this.toggleAllSelection();
    this.initData();
  }
  initData() {
    this.searchData();
  }
  toggleAllSelection() {
    if (!this.allSelected) {
      this.searchForm.controls.listTransType.patchValue([
        ...this.transTypeLists.map((item) => item.value),
        "",
      ]);
      this.allSelected = true;
    } else {
      this.searchForm.controls.listTransType.patchValue([]);
      this.allSelected = false;
    }
  }
  getFromData() {
    const form = this.searchForm.value;
    this.searchRequest = {};
    if (form.listTransType) {
      this.searchRequest.listTransType = form.listTransType.filter(
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
  getDataTable(request) {
    this.loading = true;
    this.listResultCode30 = null;
    this.bambooService
      .getReportNonFinancialReconcileDetail(request)
      .subscribe((data) => {
        this.listResultCode00 = data.data?.listResultCode00
          ? data.data.listResultCode00
          : [];
        this.listResultCode30 = data.data?.listResultCode30
          ? data.data.listResultCode30
          : [];
        this.listResultCode03 = data.data?.listResultCode03
          ? data.data.listResultCode03
          : [];
        this.loading = false;
      });
  }
  exportFileExcel() {
    let request = this.getFromData();
    if (request != null) {
      this.bambooService.exportReportNonFinancialReconcileDetail(request);
    }
  }
}
