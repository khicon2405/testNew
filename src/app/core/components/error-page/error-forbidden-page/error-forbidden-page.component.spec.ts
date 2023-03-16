import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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
import { MockActivatedRouteValue, MockRouter } from 'src/app/shared/mockData/mockRouter';
import { MaterialModule } from 'src/app/shared/shared/material.module';

import { ErrorForbiddenPageComponent } from './error-forbidden-page.component';

describe('ErrorForbiddenPageComponent', () => {
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
        ErrorForbiddenPageComponent,
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
          provide: Router,
          useClass: MockRouter,
        },
      ]
    }).compileComponents();
  }));

  it('should create and navigate default', () => {
    const fixture = TestBed.createComponent(ErrorForbiddenPageComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    spyOn(localStorage, "getItem").withArgs(LocalStorageType.DefaultUrl).and.returnValue('merchant');
    app.navigateToHomePage();
    expect(app).toBeTruthy();
  });
  it('should create and navigate login', () => {
    const fixture = TestBed.createComponent(ErrorForbiddenPageComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    spyOn(localStorage, "getItem").withArgs(LocalStorageType.DefaultUrl).and.returnValue('');
    app.navigateToHomePage();
    expect(app).toBeTruthy();
  });
});
