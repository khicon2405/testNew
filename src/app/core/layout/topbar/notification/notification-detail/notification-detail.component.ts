import { Component, OnInit } from "@angular/core";
import { NotificationService } from "@core/services";
import { ToastrService } from "ngx-toastr";
import { TranslateService } from "@ngx-translate/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "ite-notification-detail",
  templateUrl: "./notification-detail.component.html",
  styleUrls: ["./notification-detail.component.scss"],
})
export class NotificationDetailComponent implements OnInit {
  public id: any;
  public notify: any = {};

  constructor(
    private notifySrv: NotificationService,
    private toastr: ToastrService,
    private translateService: TranslateService,
    private route: ActivatedRoute,
    private router: Router,
    public location: Location
  ) {
    this.route.paramMap.subscribe((params) => {
      this.id = +params.get("id");
      this.getDetailById();
    });
  }

  ngOnInit(): void {}

  getDetailById() {
    this.notifySrv.getById(this.id).subscribe((data) => {
      if (data.error_code === "00") {
        this.notify = data.data;
      } else {
        this.toastr.error(
          this.getTranslation("notifications.errors." + data.error_code)
        );
      }
    });
  }

  getTranslation(key) {
    return this.translateService.instant(key);
  }

  back() {
    // this.router.navigateByUrl("/admin/notification");
    this.location.back();
  }

  delete() {
    const rq = {
      notifications: [this.id],
    };
    this.notifySrv.delete(rq).subscribe((data) => {
      this.showResult(data, "notifications.deleted");
    });
  }

  markAsUnread() {
    const rq = {
      notifications: [this.id],
      type: "unread",
    };
    this.notifySrv.markAsReadOrUnread(rq).subscribe((data) => {
      this.showResult(data, "notifications.unread");
    });
  }

  showResult(data, message) {
    if (data.error_code === "00") {
      this.toastr.success(this.getTranslation(message));
      this.back();
    } else {
      this.toastr.error(
        this.getTranslation("notifications.errors." + data.error_code)
      );
    }
  }

  viewDetail(item) {
    const url = this.notifySrv.getUrl(item);
    this.router.navigateByUrl(url);
  }
}
