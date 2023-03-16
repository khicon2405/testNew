import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { SharedModule } from '../shared/shared/shared.module';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from './directives/directives.module';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';
import { ChangePasswordComponent } from './layout/topbar/change-password/change-password.component';
import { ProfileModalComponent } from './components/profile/profile-modal/profile-modal.component';
import { ChangeAvatarModalComponent } from './components/profile/change-avatar-modal/change-avatar-modal.component';
import { FooterButtonComponent } from './components/common/footer-button/footer-button.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotificationComponent } from './layout/topbar/notification/notification.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DialogNotificationComponent } from './components/common/dialogs/dialog-notification/dialog-notification.component';
import { SuccessDialogComponent } from './components/forgot-password/success-dialog/success-dialog.component';
import { DialogConfirmComponent } from './components/common/dialogs/dialog-confirm/dialog-confirm.component';
import { FirstLoginComponent } from './components/login/first-login/first-login.component';
import { ImageViewByFileComponent } from './components/common/image-view-by-file/image-view-by-file.component';
import { TranslateModule } from '@ngx-translate/core';
import { ErrorForbiddenPageComponent } from './components/error-page/error-forbidden-page/error-forbidden-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    TopbarComponent,
    ChangePasswordComponent,
    SidebarComponent,
    AppComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    BreadcrumbComponent,
    ProfileModalComponent,
    ChangeAvatarModalComponent,
    FooterButtonComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    NotificationComponent,
    ResetPasswordComponent,
    SuccessDialogComponent,
    DialogConfirmComponent,
    DialogNotificationComponent,
    FirstLoginComponent,
    ImageViewByFileComponent,
    ErrorForbiddenPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    FormsModule,
    RouterModule,
    SharedModule,
    TranslateModule
  ],
  entryComponents: [
    ChangePasswordComponent,
    ChangeAvatarModalComponent,
    ProfileModalComponent
  ],
  exports: [
    AppComponent,
    DirectivesModule,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    ErrorForbiddenPageComponent
  ]
})
export class CoreModule { }
