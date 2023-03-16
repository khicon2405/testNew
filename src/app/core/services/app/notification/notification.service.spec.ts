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
    MockNoti,
} from "src/app/shared/mockData/mockData";
import { NotificationService } from './notification.service';


describe("Notification Service", () => {
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
                NotificationService,
            ],
        });
    });

    it('should get noti list and set noti amount number',
        () => {
            let service = TestBed.get(NotificationService);
            let httpMock = TestBed.get(HttpTestingController);
            service.baseUrl = REAL_API_URL_2;
            const result = service.getNotification({ page: 1, size: 10 }).subscribe((res: any) => {
                expect(res).toEqual({
                    error_code: '00',
                    list_data: MockNoti
                });
            });
            httpMock.expectOne(`${REAL_API_URL_2}/notifications/get-all`).flush({
                error_code: '00',
                list_data: MockNoti
            });
            service.setNotificationAmount(10);
            service.getNotificationAmount().subscribe((val: any) => {
                expect(val).toEqual(10);
            })
            const mockUrl = service.getUrl({ target: 'AGENCY', target_id: '/1003' });
            expect(mockUrl).toEqual('admin/agency-profile');
            httpMock.verify();
            expect(service).toBeTruthy();
        });
    it('should noti by id',
        () => {
            let service = TestBed.get(NotificationService);
            let httpMock = TestBed.get(HttpTestingController);
            service.baseUrl = REAL_API_URL_2;
            const result = service.getById('100').subscribe((res: any) => {
                expect(res).toEqual({
                    error_code: '00',
                    data: MockNoti[0]
                });
            });
            httpMock.expectOne(`${REAL_API_URL_2}/notifications/detail`).flush({
                error_code: '00',
                data: MockNoti[0]
            });
            httpMock.verify();
            expect(service).toBeTruthy();
        });
    it('should get newest noti',
        () => {
            let service = TestBed.get(NotificationService);
            let httpMock = TestBed.get(HttpTestingController);
            service.baseUrl = REAL_API_URL_2;
            const result = service.getNewestNotification({ page: 1, size: 10 }).subscribe((res: any) => {
                expect(res).toEqual({
                    error_code: '00',
                    list_data: MockNoti
                });
            });
            httpMock.expectOne(`${REAL_API_URL_2}/notifications/get-new`).flush({
                error_code: '00',
                list_data: MockNoti
            });
            httpMock.verify();
            expect(service).toBeTruthy();
        });
    it('should mark all as read',
        () => {
            let service = TestBed.get(NotificationService);
            let httpMock = TestBed.get(HttpTestingController);
            service.baseUrl = REAL_API_URL_2;
            const result = service.markAllAsRead().subscribe((res: any) => {
                expect(res).toEqual({
                    error_code: '00'
                });
            });
            httpMock.expectOne(`${REAL_API_URL_2}/notifications/read-all`).flush({
                error_code: '00',
            });
            httpMock.verify();
            expect(service).toBeTruthy();
        });
    it('should mark all as unread',
        () => {
            let service = TestBed.get(NotificationService);
            let httpMock = TestBed.get(HttpTestingController);
            service.baseUrl = REAL_API_URL_2;
            const result = service.markAsReadOrUnread({ id: '1001' }).subscribe((res: any) => {
                expect(res).toEqual({
                    error_code: '00'
                });
            });
            httpMock.expectOne(`${REAL_API_URL_2}/notifications/read`).flush({
                error_code: '00',
            });
            httpMock.verify();
            expect(service).toBeTruthy();
        });
    it('should mark all as unread',
        () => {
            let service = TestBed.get(NotificationService);
            let httpMock = TestBed.get(HttpTestingController);
            service.baseUrl = REAL_API_URL_2;
            const result = service.delete({ id: '1001' }).subscribe((res: any) => {
                expect(res).toEqual({
                    error_code: '00'
                });
            });
            httpMock.expectOne(`${REAL_API_URL_2}/notifications/delete`).flush({
                error_code: '00',
            });
            httpMock.verify();
            expect(service).toBeTruthy();
        });
});
