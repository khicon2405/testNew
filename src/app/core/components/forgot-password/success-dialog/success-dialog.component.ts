import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { langSettings, LocalStorageType  } from '@core/constants';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ite-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.scss']
})
export class SuccessDialogComponent implements OnInit {
  public langSetting = langSettings;
  public langCode = 'vi';
  public flag: string;
  constructor(public translate: TranslateService, public dialogRef: MatDialogRef<SuccessDialogComponent>,) { }

  ngOnInit(): void {
    if (localStorage.getItem(LocalStorageType.LoginLanguage)) {
      this.changeLang(localStorage.getItem(LocalStorageType.LoginLanguage));
    } else {
      this.changeLang('vi');
    }
  }
  closeDialog(){
    this.dialogRef.close();
  }
  changeLang(lang: string) {
    localStorage.setItem(LocalStorageType.LoginLanguage,lang);
    this.langCode = lang;
    this.flag = this.getLangSetting(this.langCode).flag;
    this.translate.use(lang);
  }
  public getLangSetting(langCode: string): any {
    if (langCode === 'vi') {
      return this.langSetting[0];
    } else {
      return this.langSetting[1];
    }
  }
}
