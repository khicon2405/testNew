import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { CommonConstants, DATE_CONFIG } from "@core/constants";
import { BambooReconcileService } from "@core/services";
import { CommonService } from "@core/services/app/common/common.service";
import { TranslateService } from "@ngx-translate/core";
import { Router } from "@angular/router";
import * as moment from "moment";
import { ToastrService } from "ngx-toastr";
import { MatDialog } from "@angular/material/dialog";
import { DialogNotificationComponent } from "../../core/components/common/dialogs/dialog-notification/dialog-notification.component";
import { saveAs as importedSaveAs } from "file-saver";
@Component({
  selector: "ite-reconcile-manager",
  templateUrl: "./manager-reconcile.component.html",
  styleUrls: ["./manager-reconcile.component.scss"],
})
export class ManagerReconcileComponent implements OnInit {
  public dataTable = [];
  public jobReconcileForm: FormGroup;
  public sendFileMBForm: FormGroup;
  public page: number = CommonConstants.DEFAULT_PAGE_INDEX;
  public pageSize: number = CommonConstants.DEFAULT_PAGE_SIZE;
  public total: number;
  public loading = true;
  public statusList = [];
  public RunJobRequest: any = {};
  public SendFileRequest: any = {};
  public dateConfig = DATE_CONFIG;
  public currentDay = new Date();
  public currentDayExport = new Date(
    new Date().setDate(new Date().getDate() - 1)
  );
  public listQueryDate = [];
  constructor(
    private router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog,
    public translate: TranslateService,
    public bambooService: BambooReconcileService
  ) {
    this.jobReconcileForm = this.fb.group({
      description: "",
      dateTime: null,
    });
    this.sendFileMBForm = this.fb.group({
      description: "",
      queryDate: null,
      isSpecific: false,
      specificqueryDate: [],
    });
    this.listQueryDate = [];
  }
  keyPressDate(event) {
    const k = event.keyCode;
    return k === 8 || k === 191 || (k >= 47 && k <= 57);
  }
  get f() {
    return this.jobReconcileForm.controls;
  }
  get f1() {
    return this.sendFileMBForm.controls;
  }
  isInvalidDate(event, field) {
    if (event.target.value === "Invalid date") {
      this.f[field].setValue(null);
    }
  }
  isInvalidDate1(event, field) {
    if (event.target.value === "Invalid date") {
      this.f1[field].setValue(null);
    }
    this.listQueryDate = this.generateDateSpecific(
      this.sendFileMBForm.value.queryDate
    );
  }
  ngOnInit(): void {
    this.initData();
  }
  initData() {
    // console.log(this.fromDate);
  }
  checkSpecific($event) {
    //this.sendFileMBForm.get("isSpecific").setValue($event.target.checked);
    this.listQueryDate = this.generateDateSpecific(
      this.sendFileMBForm.value.queryDate
    );
  }
  generateDateSpecific(queryDate) {
    let listDate = [];
    if (queryDate) {
      for (let i = 0; i < 10; i++) {
        let dateCurent = moment(
          new Date(queryDate.setHours(7, 0, 0)).setDate(queryDate.getDate() - i)
        );
        listDate.push({
          value: dateCurent.toISOString(),
          des: dateCurent.toISOString().split("T")[0],
        });
      }
    }
    return listDate;
  }
  showModal(title, message, callback) {
    const dialogRef = this.dialog.open(DialogNotificationComponent, {
      width: "400px",
      disableClose: true,
      data: { title, message, yes: callback },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
  getFromRunJob() {
    const form = this.jobReconcileForm.value;
    this.RunJobRequest = {};
    if (form.dateTime) {
      this.RunJobRequest.dateTime = moment(
        form.dateTime.setHours(7, 0, 0)
      ).toISOString();
    } else {
      this.showModal("Thông báo", "Vui lòng chọn ngày phiên đối soát.", null);
      return null;
    }
    if (form.description) {
      this.RunJobRequest.description = form.description.trim();
    }
    if (!form.description) {
      this.showModal("Thông báo", "Vui lòng điền thông tin mô tả.", null);
      return null;
    }
    return this.RunJobRequest;
  }
  getFromSendFileMB() {
    const form = this.sendFileMBForm.value;
    this.SendFileRequest = {};
    if (form.queryDate) {
      this.SendFileRequest.queryDate = moment(
        form.queryDate.setHours(7, 0, 0)
      ).toISOString();
    } else {
      this.showModal("Thông báo", "Vui lòng chọn ngày phiên đối soát.", null);
      return null;
    }
    if (form.isSpecific) {
      this.SendFileRequest.isSpecific = form.isSpecific;
    }
    if (form.isSpecific && !form.specificqueryDate) {
      this.showModal(
        "Thông báo",
        "Vui lòng chọn danh sách ngày đối soát cho phiên đặc biệt.",
        null
      );
      return null;
    }
    if (!form.description) {
      this.showModal("Thông báo", "Vui lòng điền thông tin mô tả.", null);
      return null;
    }
    if (form.description) {
      this.SendFileRequest.description = form.description.trim();
    }
    if (form.specificqueryDate) {
      this.SendFileRequest.specificqueryDate = form.specificqueryDate;
    }
    return this.SendFileRequest;
  }
  runJobReconcile() {
    let request = this.getFromRunJob();
    if (request != null) {
      this.callApiRunJob(request);
    }
  }
  sendFileMB() {
    let request = this.getFromSendFileMB();
    if (request != null) {
      this.callApiSendeFile(request);
    }
  }
  callApiRunJob(request) {
    this.loading = true;
    this.bambooService.apiManagerRunJob(request).subscribe((data) => {
      this.loading = false;
      this.showModal("Thông báo", data?.message, this.reloadPage);
    });
  }
  callApiSendeFile(request) {
    this.loading = true;
    this.bambooService.apiManagerSendeFile(request).subscribe((data) => {
      this.loading = false;
      this.showModal("Thông báo", data?.message, this.reloadPage);
    });
  }
  reloadPage() {
    window.location.reload();
  }
}
