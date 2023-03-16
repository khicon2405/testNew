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
import { NotificationDetailComponent } from './notification-detail.component';

describe('Notification Detail Component', () => {
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
                NotificationDetailComponent,
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
        const fixture = TestBed.createComponent(NotificationDetailComponent);
        const app = fixture.debugElement.componentInstance;
        spyOn(app.notifySrv, "getById").and.returnValue(
            of({
                error_code: '00',
                data: MockNoti[0]
            })
        )
        spyOn(app.notifySrv, "delete").and.returnValue(
            of({
                error_code: '00',
                data: MockNoti[0]
            })
        )
        spyOn(app.notifySrv, "markAsReadOrUnread").and.returnValue(
            of({
                error_code: '00',
                data: MockNoti[0]
            })
        )
        spyOn(app.notifySrv, "getUrl").and.returnValue(
            'mockUrl'
        )
        fixture.detectChanges();
        app.getDetailById();
        app.back();
        app.delete();
        app.markAsUnread();
        app.showResult({ error_code: '00' }, 'success');
        app.showResult({ error_code: '01' }, 'success');
        app.viewDetail({});
        expect(app).toBeTruthy();
    });
});
