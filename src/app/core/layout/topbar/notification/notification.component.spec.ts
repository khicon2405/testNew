import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BackgroundLoader } from '@core/services';
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { MockNoti } from 'src/app/shared/mockData/mockData';
import { MatDialogMock, mockDialogRef } from 'src/app/shared/mockData/mockDialog';
import { MockActivatedRouteValue, MockRouter } from 'src/app/shared/mockData/mockRouter';
import { MaterialModule } from 'src/app/shared/shared/material.module';
import { NotificationComponent } from './notification.component';
describe('Notification Component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                RouterTestingModule,
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useClass: TranslateFakeLoader,
                        deps: [HttpClient]
                    }
                }),
                ToastrModule.forRoot(),
                BrowserAnimationsModule,
                MaterialModule,
                BsDatepickerModule.forRoot(),
                NgxMatSelectSearchModule
            ],
            declarations: [
                NotificationComponent,
            ],
            providers: [
                FormBuilder,
                BackgroundLoader,
                ToastrService,
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {}
                },
                {
                    provide: ActivatedRoute,
                    useValue: MockActivatedRouteValue(
                        of<any>({
                            status: 'success',
                            get(att: string) {
                                return this.status
                            }
                        }),
                        of<any>({
                            page: 1,
                            size: 10,
                        })
                    ),
                },
                {
                    provide: MatDialog,
                    useClass: MatDialogMock,
                },
                {
                    provide: MatDialogRef,
                    useValue: mockDialogRef,
                },
                {
                    provide: Router,
                    useClass: MockRouter,
                },
            ]
        }).compileComponents();
    }));

    it('should create', () => {
        const fixture = TestBed.createComponent(NotificationComponent);
        const app = fixture.debugElement.componentInstance;
        spyOn(app.notifySrv, "getNotification").and.returnValue(of({
            error_code: '00',
            list_data: MockNoti,
            new_record: 3,
        }));
        spyOn(app.notifySrv, "markAllAsRead").and.returnValue(of({
            error_code: '00',
        }));
        spyOn(app.notifySrv, "markAsReadOrUnread").and.returnValue(of({
            error_code: '00',
        }));
        spyOn(app.notifySrv, "delete").and.returnValue(of({
            error_code: '00',
        }));
        fixture.detectChanges();
        app.markAllAsRead();
        app.markAsReadOrUnread({
            isRead: true,
            id: '27463724'
        })
        app.markAsReadOrUnread({
            isRead: false,
            id: '27463724'
        })
        app.delete({
            isRead: false,
            id: '27463724'
        })
        app.seeAll();
        app.viewDetail({
            target_id: '101',
            status: 'new'
        })
        app.viewDetail({
            target_id: '101',
            id: '234723',
            status: 'old'
        })
        app.viewDetail({
            target_id: null,
            id: '234723',
            status: 'new'
        })
        expect(app).toBeTruthy();
    });
});
