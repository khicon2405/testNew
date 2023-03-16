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
import { NotificationListComponent } from './notification-list.component';
describe('Notification List Component', () => {
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
                NotificationListComponent,
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
        const fixture = TestBed.createComponent(NotificationListComponent);
        const app = fixture.debugElement.componentInstance;
        spyOn(app.notifySrv, 'getNotification').and.returnValue(
            of(
                {
                    error_code: '00',
                    list_data: MockNoti,
                    new_record: 3,
                    total_record: 23
                }
            )
        )
        spyOn(app.notifySrv, 'markAllAsRead').and.returnValue(
            of(
                {
                    error_code: '00',
                }
            )
        )
        spyOn(app.notifySrv, 'markAsReadOrUnread').and.returnValue(
            of(
                {
                    error_code: '00',
                }
            )
        )
        spyOn(app.notifySrv, 'delete').and.returnValue(
            of(
                {
                    error_code: '00',
                }
            )
        )
        spyOn(app.notifySrv, 'getUrl').and.returnValue(
            'abc'
        )
        fixture.detectChanges();
        app.searchCtrl.setValue('abc');
        app.changePage(4);
        app.onPageSizeChange(20);
        app.delete();
        app.markAsReadOrUnread('all');
        app.viewDetail({ id: '02', status: 'new' });
        app.showResult({ error_code: "00" }, 'new');
        app.showResult({ error_code: "01" }, 'new');
        app.navigate({ content: 'abc', target_id: '0232' });
        app.navigate({ content: 'abc', target_id: '0232', status: 'new' });
        app.checkedList = MockNoti;
        app.delete();
        app.markAsReadOrUnread('all');
        expect(app).toBeTruthy();
    });
    it('should create with error', () => {
        const fixture = TestBed.createComponent(NotificationListComponent);
        const app = fixture.debugElement.componentInstance;
        spyOn(app.notifySrv, 'getNotification').and.returnValue(
            of(
                {
                    error_code: '02',
                    list_data: MockNoti,
                    new_record: 3,
                    total_record: 23
                }
            )
        )
        spyOn(app.notifySrv, 'markAllAsRead').and.returnValue(
            of(
                {
                    error_code: '00',
                }
            )
        )
        spyOn(app.notifySrv, 'markAsReadOrUnread').and.returnValue(
            of(
                {
                    error_code: '00',
                }
            )
        )
        spyOn(app.notifySrv, 'delete').and.returnValue(
            of(
                {
                    error_code: '00',
                }
            )
        )
        fixture.detectChanges();
        app.searchCtrl.setValue('abc');
        app.changePage(4);
        app.onPageSizeChange(20);
        app.delete();
        app.markAsReadOrUnread('all');
        app.viewDetail({ id: '02', status: 'new' });
        app.showResult({ error_code: "00" }, 'new');
        app.showResult({ error_code: "01" }, 'new');
        app.filterBy({ error_code: "01" }, 'new');
        app.checkOrUncheckAll({ checked: true });
        app.checkOrUncheckAll({ checked: false });
        app.checkOrUncheckItem(MockNoti[0]);
        expect(app).toBeTruthy();
    });
});
