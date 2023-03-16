import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LocalStorageType } from '@core/constants';
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
import { FirstLoginComponent } from './first-login.component';

describe('FirstLoginComponent', () => {
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
                FirstLoginComponent,
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

    it('should create with no default language', () => {
        spyOn(localStorage, "getItem")
            .withArgs(LocalStorageType.LoginLanguage).and.returnValue(undefined)
            .withArgs(LocalStorageType.UserInformation).and.returnValue('{"id":"1911","userId":"95121C27-402E-F3D2-FE7A-C5BA9DD6AC15","userInformation":"Nguyễn Văn z","userName":"vnnnnnnnnz","pin":192,"displayName":"Nguyễn Văn z","email":"0anti.4mallu@bizybot.com","lastLoginDate":"2021-02-09T03:05:35.441Z","access_token":"eyJhbGciOiJIUzI1NiJ9.eyJpc0NoYW5nZVBhc3N3b3JkIjowLCJ1c2VyaWQiOjgsImlhdCI6MTYxMjg0MDAzOSwianRpIjoiRUYzMjNBQjUyQjNGMUEwRUVFODZDMzY3MkU2MEQ0MTciLCJleHBEYXRlIjoxNjEyODQyMTcwMDAwfQ.prRq_ouQZoISG5LZlFB-wrzUlMFW0e2KogariRy-XZQ","refresh_token":"A6752CEF-0BD4-E105-7BE2-4CC65080F9F4","token_type":"admin","expires_in":1192,"userRoles":["admin","normal"],"userRole":"Admin","listUserRoles":["admin","normal"],"listUserRoleIds":["1","2"],"isActive":true,"isSystemAdmin":true,"thumbnailPhoto":"http://35.223.25.100:8011/vtl-pg/aa/media/avatar/8-20201106102350.jpg","phone":"0321414123","is_change_password":0}');
        const fixture = TestBed.createComponent(FirstLoginComponent);
        const app = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        expect(app).toBeTruthy();
    });
    it('should create', () => {
        spyOn(localStorage, "getItem")
            .withArgs(LocalStorageType.LoginLanguage).and.returnValue('vi')
            .withArgs(LocalStorageType.UserInformation).and.returnValue('{"id":"1911","userId":"95121C27-402E-F3D2-FE7A-C5BA9DD6AC15","userInformation":"Nguyễn Văn z","userName":"vnnnnnnnnz","pin":192,"displayName":"Nguyễn Văn z","email":"0anti.4mallu@bizybot.com","lastLoginDate":"2021-02-09T03:05:35.441Z","access_token":"eyJhbGciOiJIUzI1NiJ9.eyJpc0NoYW5nZVBhc3N3b3JkIjowLCJ1c2VyaWQiOjgsImlhdCI6MTYxMjg0MDAzOSwianRpIjoiRUYzMjNBQjUyQjNGMUEwRUVFODZDMzY3MkU2MEQ0MTciLCJleHBEYXRlIjoxNjEyODQyMTcwMDAwfQ.prRq_ouQZoISG5LZlFB-wrzUlMFW0e2KogariRy-XZQ","refresh_token":"A6752CEF-0BD4-E105-7BE2-4CC65080F9F4","token_type":"admin","expires_in":1192,"userRoles":["admin","normal"],"userRole":"Admin","listUserRoles":["admin","normal"],"listUserRoleIds":["1","2"],"isActive":true,"isSystemAdmin":true,"thumbnailPhoto":"http://35.223.25.100:8011/vtl-pg/aa/media/avatar/8-20201106102350.jpg","phone":"0321414123","is_change_password":0}');
        const fixture = TestBed.createComponent(FirstLoginComponent);
        const app = fixture.debugElement.componentInstance;
        spyOn(app.profileService, "updatePassword").and.returnValue(
            of({
                error_code: "00"
            })
        );
        spyOn(app.authService, "logOut").and.returnValue(
            of({
                error_code: "00"
            })
        );
        fixture.detectChanges();
        app.onUpdate();
        app.f.currentPassword.setValue('abc@12345');
        app.f.password.setValue('abc@123457');
        app.f.confirmPassword.setValue('abc@123457');
        app.checkValue({
            keycode: 8,
            target: {
                value: ""
            }
        });
        app.onUpdate();
        app.checkValue({
            keycode: 8,
            target: {
                value: "Abcdef12345@"
            }
        });
        app.onUpdate();
        expect(app).toBeTruthy();
    });
    it('should create and update password failed', () => {
        spyOn(localStorage, "getItem")
            .withArgs(LocalStorageType.LoginLanguage).and.returnValue('vi')
            .withArgs(LocalStorageType.UserInformation).and.returnValue('{"id":"1911","userId":"95121C27-402E-F3D2-FE7A-C5BA9DD6AC15","userInformation":"Nguyễn Văn z","userName":"vnnnnnnnnz","pin":192,"displayName":"Nguyễn Văn z","email":"0anti.4mallu@bizybot.com","lastLoginDate":"2021-02-09T03:05:35.441Z","access_token":"eyJhbGciOiJIUzI1NiJ9.eyJpc0NoYW5nZVBhc3N3b3JkIjowLCJ1c2VyaWQiOjgsImlhdCI6MTYxMjg0MDAzOSwianRpIjoiRUYzMjNBQjUyQjNGMUEwRUVFODZDMzY3MkU2MEQ0MTciLCJleHBEYXRlIjoxNjEyODQyMTcwMDAwfQ.prRq_ouQZoISG5LZlFB-wrzUlMFW0e2KogariRy-XZQ","refresh_token":"A6752CEF-0BD4-E105-7BE2-4CC65080F9F4","token_type":"admin","expires_in":1192,"userRoles":["admin","normal"],"userRole":"Admin","listUserRoles":["admin","normal"],"listUserRoleIds":["1","2"],"isActive":true,"isSystemAdmin":true,"thumbnailPhoto":"http://35.223.25.100:8011/vtl-pg/aa/media/avatar/8-20201106102350.jpg","phone":"0321414123","is_change_password":0}');
        const fixture = TestBed.createComponent(FirstLoginComponent);
        const app = fixture.debugElement.componentInstance;
        spyOn(app.profileService, "updatePassword").and.returnValue(
            of({
                error_code: "06"
            })
        );
        spyOn(app.authService, "logOut").and.returnValue(
            of({
                error_code: "00"
            })
        );
        fixture.detectChanges();
        app.checkValue({
            keycode: 8,
            target: {
                value: ""
            }
        });
        app.checkValue({
            keycode: 8,
            target: {
                value: "Abcdef12345@"
            }
        });
        app.onUpdate();
        app.f.currentPassword.setValue('abc@12345');
        app.f.password.setValue('abc@123457');
        app.f.confirmPassword.setValue('abc@123457');
        app.onUpdate();
        const event = new MockEvent();
        event.keyCode = 32;
        app.onKeydown(event);
        app.getLangSetting("en");
        expect(app).toBeTruthy();
    });
});
