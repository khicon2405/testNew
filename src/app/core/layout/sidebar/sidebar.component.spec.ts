import { async, TestBed } from "@angular/core/testing";
import {
    MatDialog,
    MatDialogRef,
    MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { BackgroundLoader, ProfileShare, AuthenticationAndAuthorizationService } from "@core/services";
import {
    TranslateModule,
    TranslateLoader,
    TranslateFakeLoader,
} from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { MaterialModule } from "src/app/shared/shared/material.module";
import { FormBuilder } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import * as _ from "lodash";
import { SidebarComponent } from './sidebar.component';
import { MenuItems } from '@core/models';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Mock } from 'protractor/built/driverProviders';
import { MockAuthService, MockUserInfo } from 'src/app/shared/mockData/mockAuthService';
import { LocalStorageType } from '@core/constants';
import { Router, NavigationEnd } from '@angular/router';
import { DirectivesModule } from '@core/directives/directives.module';
import { ProfileComponent } from '@core/components/profile/profile.component';
import { AgencyComponent } from "@web/report/agency/agency.component";
import { MockRouterValue } from "src/app/shared/mockData/mockRouter";
import { MockLeftMenu } from "src/app/shared/mockData/mockData";
import { MatDialogMock, mockDialogRef } from "src/app/shared/mockData/mockDialog";
@Injectable()
export class MockProfileShare extends ProfileShare {
    getProfileInfo() {
        return of({
            profileName: 'PLS',
            avatarUrl: ''
        })
    }
}
describe("Sidebar Component", () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes([
                    {
                        path: 'admin/user/detail',
                        component: AgencyComponent
                    },
                    {
                        path: '',
                        component: AgencyComponent
                    },
                    {
                        path: 'profile',
                        component: ProfileComponent
                    },
                ]),
                HttpClientTestingModule,
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useClass: TranslateFakeLoader,
                        deps: [HttpClient],
                    },
                }),
                MaterialModule,
                ToastrModule.forRoot(),
                BrowserAnimationsModule,
                DirectivesModule
            ],
            declarations: [SidebarComponent],
            providers: [
                {
                    provide: MatDialogRef,
                    useValue: mockDialogRef,
                },
                BackgroundLoader,
                {
                    provide: MatDialog,
                    useClass: MatDialogMock,
                },
                {
                    provide: Router,
                    useValue: MockRouterValue(),
                },
                {
                    provide: ProfileShare,
                    useClass: MockProfileShare,
                },
                {
                    provide: AuthenticationAndAuthorizationService,
                    useClass: MockAuthService,
                },
                MenuItems,
                FormBuilder,
            ],
        }).compileComponents();
    }));

    it("should create the app", () => {
        const router = TestBed.inject(Router);
        // spyOnProperty(router, 'url').and.returnValue('/admin/user')
        (router as any).url = '/admin/user';
        spyOn(localStorage, 'getItem')
            .withArgs(LocalStorageType.SideBarConfig).and.returnValue(JSON.stringify(MockLeftMenu))
            .withArgs(LocalStorageType.UserInformation).and.returnValue(JSON.stringify(MockUserInfo));
        const fixture = TestBed.createComponent(SidebarComponent);
        const app = fixture.debugElement.componentInstance;
        app.menuItemList = MockLeftMenu;
        app.sidebarState = 'open';
        fixture.detectChanges();
        app.sidebarService.toggle();
        app.sidebarService.toggle();
        expect(app).toBeTruthy();
    });
    it("should create the app1", () => {
        const router = TestBed.inject(Router);
        // spyOnProperty(router, 'url').and.returnValue('/admin/transaction-refund');
        (router as any).url = '/admin/user';
        spyOn(localStorage, 'getItem')
            .withArgs(LocalStorageType.SideBarConfig).and.returnValue(JSON.stringify(MockLeftMenu))
            .withArgs(LocalStorageType.UserInformation).and.returnValue(JSON.stringify(MockUserInfo));
        const fixture = TestBed.createComponent(SidebarComponent);
        const app = fixture.debugElement.componentInstance;
        app.menuItemList = MockLeftMenu;
        app.sidebarState = 'open';
        fixture.detectChanges();
        app.sidebarService.toggle();
        app.sidebarService.toggle();
        app.navigate('admin/user/detail');
        app.openProfile();
        app.toggleSection(1);
        app.toggleSection(1);
        app.sidebarService.toggle();
        app.toggleSection(1);
        app.toggleSection(1);
        expect(app).toBeTruthy();
    });
});
