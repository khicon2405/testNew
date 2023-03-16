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
import { ForgotPasswordComponent } from './forgot-password.component';

describe('Forgot Password Component', () => {
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
                ForgotPasswordComponent,
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
        spyOn(localStorage, 'getItem').withArgs(LocalStorageType.LoginLanguage).and.returnValue(undefined);
        const fixture = TestBed.createComponent(ForgotPasswordComponent);
        const app = fixture.debugElement.componentInstance;
        spyOn(app.profileService, 'confirmResetPws').and.returnValue(of({
            ref_id: '0473284'
        }));
        fixture.detectChanges();
        app.resetPasswords('pls@gmail.com');
        app.f.email.setValue('pls@gmail.com');
        app.resetPasswords('pls@gmail.com');
        expect(app).toBeTruthy();
        // expect(app.f).toBeTruthy();expect(app.f).toBeTruthy();
    });
    it('should create with default language', () => {
        spyOn(localStorage, 'getItem').withArgs(LocalStorageType.LoginLanguage).and.returnValue('en');
        const fixture = TestBed.createComponent(ForgotPasswordComponent);
        const app = fixture.debugElement.componentInstance;
        spyOn(app.profileService, 'confirmResetPws').and.returnValue(of({
            ref_id: null,
            error_code: '01'
        }));
        fixture.detectChanges();
        app.f.email.setValue('pls@gmail.com');
        app.resetPasswords('pls@gmail.com');
        app.changeLang('en');
        app.f.email.setValue('094374347');
        app.changeLang('vi');
        app.isValidPhone('0238924');
        app.isValidPhone('0945212157');
        expect(app).toBeTruthy();

    });
    it('should create with no default language', () => {
        spyOn(localStorage, 'getItem').withArgs(LocalStorageType.LoginLanguage).and.returnValue(undefined);
        const fixture = TestBed.createComponent(ForgotPasswordComponent);
        const app = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        expect(app).toBeTruthy();
    });
});
