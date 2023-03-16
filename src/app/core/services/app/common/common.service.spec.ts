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
import {
    MockTranslateLoader,
    MockTranslateService,
} from "src/app/shared/mockData/mockTranslate";
import { MatDialog } from "@angular/material/dialog";
import { MatDialogMock } from "src/app/shared/mockData/mockDialog";
import { REAL_API_URL, REAL_API_URL_2 } from "@core/constants";
import {
    MockHistory,
    MockProfile,
    MockAgencyDetail,
    MockCityList,
    MockBank,
} from "src/app/shared/mockData/mockData";
import { CommonService } from './common.service';

describe("Common Service", () => {
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
                // ToastrModule.forRoot(),
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
                CommonService,
            ],
        });
    });

    it("should get list box data", () => {
        let service = TestBed.get(CommonService);
        let httpMock = TestBed.get(HttpTestingController);
        service.baseUrl = REAL_API_URL_2;
        const result = service.GetListBoxData('bank').subscribe((res: any) => {
            expect(res).toEqual({
                error_code: "00",
                data: MockBank,
            });
        });
        httpMock.expectOne(`${REAL_API_URL_2}/getlistbox`).flush({
            error_code: "00",
            data: MockBank,
        });
        httpMock.verify();
        expect(service).toBeTruthy();
    });
    it("should get file", () => {
        let service = TestBed.get(CommonService);
        let httpMock = TestBed.get(HttpTestingController);
        const blobSamplePdf = new Blob(["reughtrietiet"], { type: "pdf" });
        blobSamplePdf["lastModifiedDate"] = "";
        blobSamplePdf["name"] = "test1.pdf";
        const url = `https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf`;
        service.downloadFileFromUrl(url);
        const file = service.getFileNameFromUrl(url);
        service.getFileFromUrl(url);
        httpMock.expectOne(url).flush(blobSamplePdf);
        httpMock.verify();
        expect(file).toEqual("dummy.pdf");
        expect(service).toBeTruthy();
    });
    it("should do other business", () => {
        let service = TestBed.get(CommonService);
        let httpMock = TestBed.get(HttpTestingController);
        const type1 = service.getfileTypeFromExtension('doc');
        const type2 = service.getfileTypeFromExtension('docx');
        const translate = service.getTranslation('common');
        service.specialExport({
            nameReport: "report1",
            nameUnit: "unit1",
            reportType: "report1",
            data: {
                table_data: []
            },
            total: "1000"
        });
        expect(type1).toEqual('msword');
        expect(type2).toEqual('vnd.openxmlformats-officedocument.wordprocessingml.document');
        expect(translate).toEqual('common');
        expect(service).toBeTruthy();
    });
    // it("should save pdf from object", () => {
    //     let service = TestBed.get(CommonService);
    //     let httpMock = TestBed.get(HttpTestingController);
    //     const data = {
    //         tableName: "report1",
    //         reportCode: "code001",
    //         showTransactionType: true,
    //         titleReport: "title01",
    //         toDate: "22/01/2021",
    //         htmlParent: {
    //             nativeElement: {
    //                 innerHTML: "ab23123"
    //             }
    //         }
    //     }
    //     service.savePdf(data);
    //     expect(service).toBeTruthy();
    // });

});
