import { TestBed, async } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader,
} from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { ToastrModule, ToastrService } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { BackgroundLoader } from "@core/services";

import { FormBuilder } from "@angular/forms";
import { MaterialModule } from "src/app/shared/shared/material.module";

import { of } from "rxjs";

import { RouterTestingModule } from "@angular/router/testing";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { ActivatedRoute, Router } from "@angular/router";
import {
  MockActivatedRouteValue,
  MockRouter,
} from "src/app/shared/mockData/mockRouter";
import {
  MockSubMerchantList,
  MockAgencyDetail,
  MockCityList,
  MockDistrictList,
  MockCommuneList,
} from "src/app/shared/mockData/mockData";
import { MockEvent } from "src/app/shared/mockData/mockEvent";
import { PaginationComponent } from "@core/components/pagination/pagination.component";
import { NgxMatSelectSearchModule } from "ngx-mat-select-search";
import { mockDialogRef } from "src/app/shared/mockData/mockDialog";
import { ImageViewByFileComponent } from "./image-view-by-file.component";

describe("Store Profile Component", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
            deps: [HttpClient],
          },
        }),
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        MaterialModule,
        BsDatepickerModule.forRoot(),
        NgxMatSelectSearchModule,
      ],
      declarations: [ImageViewByFileComponent],
      providers: [
        FormBuilder,
        BackgroundLoader,
        ToastrService,
        {
          provide: MAT_DIALOG_DATA,
          useValue: {},
        },
        {
          provide: ActivatedRoute,
          useValue: MockActivatedRouteValue(
            of<any>({
              status: "success",
              get(att: string) {
                return this.status;
              },
            }),
            of<any>({
              page: 1,
              size: 10,
            })
          ),
        },
        {
          provide: Router,
          useClass: MockRouter,
        },
        {
          provide: MatDialogRef,
          useValue: mockDialogRef,
        },
      ],
    }).compileComponents();
  }));
  it("should create the app and with update successful", () => {
    const fixture = TestBed.createComponent(ImageViewByFileComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    app.cancel();
    expect(app).toBeTruthy();
  });
  it("should create the app and with update successful", () => {
    const fixture = TestBed.createComponent(ImageViewByFileComponent);
    const app = fixture.debugElement.componentInstance;
    app.imageUrlStatus = false;
    const blobSampleJpeg = new Blob(["reughtrietiet"], {
      type: "image/jpeg",
    });
    blobSampleJpeg["lastModifiedDate"] = "";
    blobSampleJpeg["name"] = "test1.jpeg";
    app.imageUrl = blobSampleJpeg;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  });
});
