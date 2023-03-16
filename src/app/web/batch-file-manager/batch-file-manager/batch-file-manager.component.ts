import { AfterViewInit, Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { CommonConstants, DATE_CONFIG } from "@core/constants";
import { BatchFileService, WalletService } from "@core/services";
import { CommonService } from "@core/services/app/common/common.service";
import { TranslateService } from "@ngx-translate/core";
import * as moment from "moment";
import { ToastrService } from "ngx-toastr";
import { MatDialog } from "@angular/material/dialog";
import { DialogNotificationComponent } from "../../../core/components/common/dialogs/dialog-notification/dialog-notification.component";
import { saveAs as importedSaveAs } from "file-saver";
@Component({
  selector: "ite-batch-file-manager",
  templateUrl: "./batch-file-manager.component.html",
  styleUrls: ["./batch-file-manager.component.scss"],
})
export class BatchFileManagerComponent implements OnInit {
  public dataTable = [];
  public searchForm: FormGroup;
  public page: number = CommonConstants.DEFAULT_PAGE_INDEX;
  public pageSize: number = CommonConstants.DEFAULT_PAGE_SIZE;
  public total: number;
  public loading = true;
  public statusList = [];
  public searchRequest: any = {};
  public dateConfig = DATE_CONFIG;
  public currentDay = new Date();
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private walletService: WalletService,
    public dialog: MatDialog,
    private commonService: CommonService,
    private toastr: ToastrService,
    public translate: TranslateService,
    public batchFileService: BatchFileService
  ) {
    this.total = this.dataTable.length;
    this.searchForm = this.fb.group({
      fromDate: new Date(
        this.currentDay.getFullYear(),
        this.currentDay.getMonth(),
        1
      ),
      toDate: this.currentDay,
      textSearch: [""],
    });
  }

  get f() {
    return this.searchForm.controls;
  }
  ngOnInit(): void {
    this.initData();
  }
  initData() {
    // console.log(this.fromDate);
    this.searchData();
  }
  keyPressDate(event) {
    const k = event.keyCode;
    return k === 8 || k === 191 || (k >= 47 && k <= 57);
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
    this.dataTable = [];
    this.batchFileService.getListBatchFile(request).subscribe((data) => {
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
  getFromData() {
    const form = this.searchForm.value;
    this.page = 1;
    this.searchRequest = {
      pageIndex: this.page,
      pageSize: this.pageSize,
    };
    // if (form.fromDate) {
    //   this.searchRequest.fromDate = moment(form.fromDate).format(
    //     CommonConstants.DATE_FORMAT_DATEPICKER
    //   );
    // }
    // if (form.toDate) {
    //   this.searchRequest.toDate = moment(form.toDate).format(
    //     CommonConstants.DATE_FORMAT_DATEPICKER
    //   );
    // }
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
  searchData() {
    let request = this.getFromData();
    if (request != null) {
      this.getDataTable(request);
    }
  }
  downloadFile(input) {
    const request = {
      fileName: input,
    };
    this.batchFileService.downloadbatchFile(request);
  }
}
