import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import {
  TranslateModule,
  TranslateFakeLoader,
  TranslateLoader,
  TranslateService,
} from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import {
  MockTranslateLoader,
  MockTranslateService,
} from "src/app/shared/mockData/mockTranslate";
import { MatDialog } from "@angular/material/dialog";
import { MatDialogMock } from "src/app/shared/mockData/mockDialog";
import { UserService } from "./user.service";
import { MockUser, MockRole } from "src/app/shared/mockData/mockData";
import { REAL_API_URL_2 } from "@core/constants";

describe("User Service", () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        // RouterTestingModule,
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateModule,
            useClass: TranslateFakeLoader,
            deps: [HttpClient],
          },
        }),
        // MaterialModule,
        ToastrModule.forRoot(),
        // BrowserAnimationsModule,
      ],
      providers: [
        {
          provide: TranslateLoader,
          useClass: MockTranslateLoader,
        },
        {
          provide: TranslateService,
          useClass: MockTranslateService,
        },
        {
          provide: MatDialog,
          useClass: MatDialogMock,
        },
        UserService,
      ],
    });
  });
  // it("should get user list", () => {
  //   let service = TestBed.get(UserService);
  //   let httpMock = TestBed.get(HttpTestingController);
  //   const result = service
  //     .getUser({ page: 1, size: 10 })
  //     .subscribe((res: any) => {
  //       expect(res).toEqual({
  //         error_code: "00",
  //         list_data: MockUser,
  //       });
  //     });
  //   httpMock.expectOne(`${REAL_API_URL_2}/user/search`).flush({
  //     error_code: "00",
  //     list_data: MockUser,
  //   });
  //   httpMock.verify();
  //   expect(service).toBeTruthy();
  // });
  // it("should get user by id", () => {
  //   let service = TestBed.get(UserService);
  //   let httpMock = TestBed.get(HttpTestingController);
  //   const result = service.getById(1001).subscribe((res: any) => {
  //     expect(res).toEqual({
  //       error_code: "00",
  //       data: MockUser[0],
  //     });
  //   });
  //   httpMock.expectOne(`${REAL_API_URL_2}/user/detail`).flush({
  //     error_code: "00",
  //     data: MockUser[0],
  //   });
  //   httpMock.verify();
  //   expect(service).toBeTruthy();
  // });
  // it("should add new user", () => {
  //   let service = TestBed.get(UserService);
  //   let httpMock = TestBed.get(HttpTestingController);
  //   const req = {
  //     user_id: "1001",
  //     fullname: "Nguyễn Văn A",
  //     phone: "09475843758",
  //     merchant_id: "10998",
  //     merchant_info: {
  //       id: "10998",
  //       bizname: "desc",
  //     },
  //     role_id: 1,
  //   };
  //   const result = service.addNewUser(req).subscribe((res: any) => {
  //     expect(res).toEqual({
  //       error_code: "00",
  //     });
  //   });
  //   httpMock.expectOne(`${REAL_API_URL_2}/user/addnew`).flush({
  //     error_code: "00",
  //   });
  //   httpMock.verify();
  //   expect(service).toBeTruthy();
  // });
  // it("should update user", () => {
  //   let service = TestBed.get(UserService);
  //   let httpMock = TestBed.get(HttpTestingController);
  //   const req = {
  //     user_id: "1001",
  //     fullname: "Nguyễn Văn A",
  //     phone: "09475843758",
  //     merchant_id: "10998",
  //     merchant_info: {
  //       id: "10998",
  //       bizname: "desc",
  //     },
  //     role_id: 1,
  //   };
  //   const result = service.updateUser(req).subscribe((res: any) => {
  //     expect(res).toEqual({
  //       error_code: "00",
  //     });
  //   });
  //   httpMock.expectOne(`${REAL_API_URL_2}/user/edit`).flush({
  //     error_code: "00",
  //   });
  //   httpMock.verify();
  //   expect(service).toBeTruthy();
  // });
  // it("should approve user", () => {
  //   let service = TestBed.get(UserService);
  //   let httpMock = TestBed.get(HttpTestingController);

  //   const result = service.approveUser("1001").subscribe((res: any) => {
  //     expect(res).toEqual({
  //       error_code: "00",
  //     });
  //   });
  //   httpMock.expectOne(`${REAL_API_URL_2}/user/approve`).flush({
  //     error_code: "00",
  //   });
  //   httpMock.verify();
  //   expect(service).toBeTruthy();
  // });
  // it("should active user", () => {
  //   let service = TestBed.get(UserService);
  //   let httpMock = TestBed.get(HttpTestingController);
  //   const request: any = {
  //     user_id: "1001",
  //   };
  //   const result = service.activeUser(request).subscribe((res: any) => {
  //     expect(res).toEqual({
  //       error_code: "00",
  //     });
  //   });
  //   httpMock.expectOne(`${REAL_API_URL_2}/user/change-status`).flush({
  //     error_code: "00",
  //   });
  //   httpMock.verify();
  //   expect(service).toBeTruthy();
  // });
  // it("should change avatar user", () => {
  //   let service = TestBed.get(UserService);
  //   let httpMock = TestBed.get(HttpTestingController);
  //   const blobImageShop = new Blob(["reughtrietiet"], { type: "image/jpg" });
  //   blobImageShop["lastModifiedDate"] = "";
  //   blobImageShop["name"] = "test1.png";
  //   const fileImageShop = new File([blobImageShop], blobImageShop["name"]);
  //   const request: any = {
  //     user_id: "1001",
  //   };
  //   const result = service
  //     .changeAvatar(fileImageShop, request)
  //     .subscribe((res: any) => {
  //       expect(res).toEqual({
  //         error_code: "00",
  //       });
  //     });
  //   httpMock.expectOne(`${REAL_API_URL_2}/profile/edit-avatar`).flush({
  //     error_code: "00",
  //   });
  //   httpMock.verify();
  //   expect(service).toBeTruthy();
  // });
});
