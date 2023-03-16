import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "ite-dialog-notification",
  templateUrl: "./dialog-notification.component.html",
  styleUrls: ["./dialog-notification.component.scss"],
})
export class DialogNotificationComponent implements OnInit {
  public message: string;
  public notification: string;
  public title: string;
  constructor(
    public dialogRef: MatDialogRef<DialogNotificationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.message = this.data.message;
    this.title = this.data.title;
    this.notification = this.data.notification;
  }
  onYesClick() {
    if (this.data.yes) this.data.yes();
    this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
