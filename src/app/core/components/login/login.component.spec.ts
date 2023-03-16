import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LeftMenuKeyConfig, LocalStorageType } from '@core/constants';
import { BackgroundLoader } from '@core/services';
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { MatDialogMock, mockDialogRef } from 'src/app/shared/mockData/mockDialog';
import { MockEvent } from 'src/app/shared/mockData/mockEvent';
import { MockActivatedRouteValue, MockRouter } from 'src/app/shared/mockData/mockRouter';
import { MaterialModule } from 'src/app/shared/shared/material.module';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
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
                LoginComponent,
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
                    provide: Router,
                    useClass: MockRouter,
                },
            ]
        }).compileComponents();
    }));

    it('should create component', () => {
        const fixture = TestBed.createComponent(LoginComponent);
        const app = fixture.debugElement.componentInstance;
        spyOn(app.authService, "checkLogin").and.returnValue(true);
        fixture.detectChanges();
        expect(app).toBeTruthy();
        expect(app.f).toBeTruthy();
    });
    it('should create', () => {
        spyOn(localStorage, 'getItem').withArgs(LocalStorageType.RememberMe).and.returnValue(
            JSON.stringify({
                acc: 'ite',
                pass: 'ite@2020'
            })
        ).withArgs(LocalStorageType.UserInformation).and.returnValue(
            JSON.stringify({
                acc: 'ite',
                pass: 'ite@2020'
            })
        ).withArgs(LocalStorageType.LoginLanguage).and.returnValue(
            "vi"
        ).withArgs(LocalStorageType.SideBarConfig).and.returnValue(
            JSON.stringify([
                {
                    "url": "admin/ho-so-dai-ly",
                    "actions": [],
                    "menu_id": 1,
                    "menu_icon": null,
                    "mapped_url": "[\"/admin/ho-so-dai-ly\"]",
                    "menu_level": 1,
                    "menu_title": "Hồ sơ đại lý"
                },
                {
                    "url": "admin/tra-cuu-dvcntt",
                    "actions": [],
                    "menu_id": 2,
                    "menu_icon": null,
                    "mapped_url": "[\"/admin/tra-cuu-dvcntt\"]",
                    "menu_level": 1,
                    "menu_title": "Tra cứu ĐVCNTT"
                },
                {
                    "url": "/admin/bao-cao-tong-hop",
                    "actions": [],
                    "menu_id": 3,
                    "menu_icon": " insert_chart_outlined",
                    "mapped_url": "[\"/admin/bao-cao-tong-hop\"]",
                    "menu_level": 1,
                    "menu_title": "Báo cáo tổng hợp"
                }
            ])
        );

        const fixture = TestBed.createComponent(LoginComponent);
        const app = fixture.debugElement.componentInstance;
        spyOn(app.authService, "checkLogin").and.returnValue(false);
        spyOn(app.authService, "doLogin").and.returnValue(of(
            {
                "error_message": "success",
                "error_code": "00",
                "expire_time": "09/02/2021 10:42:50",
                "is_change_password": 0,
                "is_subAgency": false,
                "user_info": {
                    "role": "Admin",
                    "email": "0anti.4mallu@bizybot.com",
                    "phone": "0321414123",
                    "avatar": "http://35.223.25.100:8011/vtl-pg/aa/media/avatar/8-20201106102350.jpg",
                    "status": 1,
                    "role_id": 1,
                    "user_id": 8,
                    "fullname": "Nguyễn Văn z",
                    "language": "vn",
                    "username": "vnnnnnnnnz",
                    "agency_id": 100027,
                    "master_id": null,
                    "creator_id": 1,
                    "last_login": "03/02/2021 16:22:39",
                    "agency_info": "{\"id\": \"100864\", \"bizname\": \"Agency Test 01\"}",
                    "status_name": "Hoạt động",
                    "created_date": "28/07/2020",
                    "creator_name": "vinh"
                },
                "menu_info": [
                    {
                        "url": "admin/ho-so-dai-ly",
                        "actions": [],
                        "menu_id": 1,
                        "menu_icon": null,
                        "mapped_url": "[\"/admin/ho-so-dai-ly\"]",
                        "menu_level": 1,
                        "menu_title": "Hồ sơ đại lý"
                    },
                    {
                        "url": "admin/tra-cuu-dvcntt",
                        "actions": [],
                        "menu_id": 2,
                        "menu_icon": null,
                        "mapped_url": "[\"/admin/tra-cuu-dvcntt\"]",
                        "menu_level": 1,
                        "menu_title": "Tra cứu ĐVCNTT"
                    },
                    {
                        "url": "/admin/bao-cao-tong-hop",
                        "actions": [],
                        "menu_id": 3,
                        "menu_icon": " insert_chart_outlined",
                        "mapped_url": "[\"/admin/bao-cao-tong-hop\"]",
                        "menu_level": 1,
                        "menu_title": "Báo cáo tổng hợp"
                    }
                ],
                "access_token": "eyJhbGciOiJIUzI1NiJ9.eyJpc0NoYW5nZVBhc3N3b3JkIjowLCJ1c2VyaWQiOjgsImlhdCI6MTYxMjg0MDAzOSwianRpIjoiRUYzMjNBQjUyQjNGMUEwRUVFODZDMzY3MkU2MEQ0MTciLCJleHBEYXRlIjoxNjEyODQyMTcwMDAwfQ.prRq_ouQZoISG5LZlFB-wrzUlMFW0e2KogariRy-XZQ"
            }
        )
        );
        fixture.detectChanges();
        app.register();
        app.redirect();
        app.setValue({ target: { checked: true } });
        app.saveInfoRemember(true);
        app.saveInfoRemember(false);
        app.getLangSetting("en");
        app.showPw = false;
        app.togglePw();
        const event = new MockEvent;
        app.enter(event);
        app.f.username.setValue('pls@gmail.com');
        app.f.password.setValue('pls@gmail.com');
        app.enter(event);
        expect(app).toBeTruthy();
        expect(app.f).toBeTruthy();
    });
    it('should create', () => {
        spyOn(localStorage, 'getItem').withArgs(LocalStorageType.RememberMe).and.returnValue(
            JSON.stringify({
                acc: 'ite',
                pass: 'ite@2020'
            })
        ).withArgs(LocalStorageType.UserInformation).and.returnValue(
            JSON.stringify({
                acc: 'ite',
                pass: 'ite@2020'
            })
        ).withArgs(LocalStorageType.LoginLanguage).and.returnValue(
            "vi"
        ).withArgs(LocalStorageType.SideBarConfig).and.returnValue(
            JSON.stringify([
                {
                    "url": "admin/ho-so-dai-ly",
                    "actions": [],
                    "menu_id": 1,
                    "menu_icon": null,
                    "mapped_url": "[\"/admin/ho-so-dai-ly\"]",
                    "menu_level": 1,
                    "menu_title": "Hồ sơ đại lý"
                },
                {
                    "url": "admin/tra-cuu-dvcntt",
                    "actions": [],
                    "menu_id": 2,
                    "menu_icon": null,
                    "mapped_url": "[\"/admin/tra-cuu-dvcntt\"]",
                    "menu_level": 1,
                    "menu_title": "Tra cứu ĐVCNTT"
                },
                {
                    "url": "/admin/bao-cao-tong-hop",
                    "actions": [],
                    "menu_id": 3,
                    "menu_icon": " insert_chart_outlined",
                    "mapped_url": "[\"/admin/bao-cao-tong-hop\"]",
                    "menu_level": 1,
                    "menu_title": "Báo cáo tổng hợp"
                }
            ])
        );

        const fixture = TestBed.createComponent(LoginComponent);
        const app = fixture.debugElement.componentInstance;
        spyOn(app.authService, "checkLogin").and.returnValue(false);
        spyOn(app.authService, "getSideBarConfig").and.returnValue(LeftMenuKeyConfig);
        spyOn(app.authService, "doLogin").and.returnValue(of(
            {
                "error_message": "success",
                "error_code": "01",
                "expire_time": "09/02/2021 10:42:50",
                "is_change_password": 1,
                "is_subAgency": false,
                "user_info": {
                    "role": "Admin",
                    "email": "0anti.4mallu@bizybot.com",
                    "phone": "0321414123",
                    "avatar": "http://35.223.25.100:8011/vtl-pg/aa/media/avatar/8-20201106102350.jpg",
                    "status": 1,
                    "role_id": 1,
                    "user_id": 8,
                    "fullname": "Nguyễn Văn z",
                    "language": "vn",
                    "username": "vnnnnnnnnz",
                    "agency_id": 100027,
                    "master_id": null,
                    "creator_id": 1,
                    "last_login": "03/02/2021 16:22:39",
                    "agency_info": "{\"id\": \"100864\", \"bizname\": \"Agency Test 01\"}",
                    "status_name": "Hoạt động",
                    "created_date": "28/07/2020",
                    "creator_name": "vinh"
                },
                "menu_info": [
                    {
                        "url": "admin/ho-so-dai-ly",
                        "actions": [],
                        "menu_id": 1,
                        "menu_icon": null,
                        "mapped_url": "[\"/admin/ho-so-dai-ly\"]",
                        "menu_level": 1,
                        "menu_title": "Hồ sơ đại lý"
                    },
                    {
                        "url": "admin/tra-cuu-dvcntt",
                        "actions": [],
                        "menu_id": 2,
                        "menu_icon": null,
                        "mapped_url": "[\"/admin/tra-cuu-dvcntt\"]",
                        "menu_level": 1,
                        "menu_title": "Tra cứu ĐVCNTT"
                    },
                    {
                        "url": "/admin/bao-cao-tong-hop",
                        "actions": [],
                        "menu_id": 3,
                        "menu_icon": " insert_chart_outlined",
                        "mapped_url": "[\"/admin/bao-cao-tong-hop\"]",
                        "menu_level": 1,
                        "menu_title": "Báo cáo tổng hợp"
                    }
                ],
                "access_token": "eyJhbGciOiJIUzI1NiJ9.eyJpc0NoYW5nZVBhc3N3b3JkIjowLCJ1c2VyaWQiOjgsImlhdCI6MTYxMjg0MDAzOSwianRpIjoiRUYzMjNBQjUyQjNGMUEwRUVFODZDMzY3MkU2MEQ0MTciLCJleHBEYXRlIjoxNjEyODQyMTcwMDAwfQ.prRq_ouQZoISG5LZlFB-wrzUlMFW0e2KogariRy-XZQ"
            }
        )
        );
        fixture.detectChanges();
        app.register();
        app.redirect();
        app.setValue({ target: { checked: true } });
        app.saveInfoRemember(true);
        app.saveInfoRemember(false);
        app.getLangSetting("en");
        app.showPw = false;
        app.togglePw();
        const event = new MockEvent;
        app.enter(event);
        app.f.username.setValue('pls@gmail.com');
        app.f.password.setValue('pls@gmail.com');
        app.enter(event);
        expect(app).toBeTruthy();
        expect(app.f).toBeTruthy();
    });
    it('should create', () => {
        spyOn(localStorage, 'getItem').withArgs(LocalStorageType.RememberMe).and.returnValue(
            JSON.stringify({
                acc: 'ite',
                pass: 'ite@2020'
            })
        ).withArgs(LocalStorageType.UserInformation).and.returnValue(
            JSON.stringify({
                acc: 'ite',
                pass: 'ite@2020'
            })
        ).withArgs(LocalStorageType.LoginLanguage).and.returnValue(
            "vi"
        ).withArgs(LocalStorageType.SideBarConfig).and.returnValue(
            JSON.stringify([
                {
                    "url": "admin/ho-so-dai-ly",
                    "actions": [],
                    "menu_id": 1,
                    "menu_icon": null,
                    "mapped_url": "[\"/admin/ho-so-dai-ly\"]",
                    "menu_level": 1,
                    "menu_title": "Hồ sơ đại lý"
                },
                {
                    "url": "admin/tra-cuu-dvcntt",
                    "actions": [],
                    "menu_id": 2,
                    "menu_icon": null,
                    "mapped_url": "[\"/admin/tra-cuu-dvcntt\"]",
                    "menu_level": 1,
                    "menu_title": "Tra cứu ĐVCNTT"
                },
                {
                    "url": "/admin/bao-cao-tong-hop",
                    "actions": [],
                    "menu_id": 3,
                    "menu_icon": " insert_chart_outlined",
                    "mapped_url": "[\"/admin/bao-cao-tong-hop\"]",
                    "menu_level": 1,
                    "menu_title": "Báo cáo tổng hợp"
                }
            ])
        );

        const fixture = TestBed.createComponent(LoginComponent);
        const app = fixture.debugElement.componentInstance;
        spyOn(app.authService, "checkLogin").and.returnValue(false);
        spyOn(app.authService, "doLogin").and.returnValue(of(
            '02'
        )
        );
        fixture.detectChanges();
        app.register();
        app.redirect();
        app.setValue({ target: { checked: true } });
        app.saveInfoRemember(true);
        app.saveInfoRemember(false);
        app.getLangSetting("en");
        app.showPw = false;
        app.togglePw();
        const event = new MockEvent;
        app.enter(event);
        app.f.username.setValue('pls@gmail.com');
        app.f.password.setValue('pls@gmail.com');
        app.enter(event);
        expect(app).toBeTruthy();
        expect(app.f).toBeTruthy();
    });
});
