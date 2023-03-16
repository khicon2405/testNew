import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { LoginComponent } from '../components/login/login.component';
import { FirstLoginComponent } from '../components/login/first-login/first-login.component';
import { RegisterComponent } from '../components/register/register.component';
import { TitleConstants } from '../constants';
import { AuthGuardService } from '@core/authentication/auth-guard.service';
import { ForgotPasswordComponent } from '@core/components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from '@core/components/reset-password/reset-password.component';
import { ErrorForbiddenPageComponent } from '@core/components/error-page/error-forbidden-page/error-forbidden-page.component';
import { PageNotFoundComponent } from '@core/components/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivateChild: [AuthGuardService],
    loadChildren: () => import('src/app/web/web.module').then(m => m.WebModule),
    data: { preload: true },
    resolve: {
    }
  },

  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: TitleConstants.LOGIN
    },
    canActivate: []
  },
  // {
  //   path: 'change-password-login',
  //   component: FirstLoginComponent,
  //   data: {
  //     title: TitleConstants.FISRTLOGIN
  //   },
  //   canActivate: []
  // },
  // {
  //   path: 'forgot-password',
  //   component: ForgotPasswordComponent,
  //   data: {
  //     title: TitleConstants.FORGOT
  //   },
  //   canActivate: []
  // },
  // {
  //   path: 'reset-password',
  //   component: ResetPasswordComponent,
  //   data: {
  //     title: TitleConstants.RESETPW
  //   },
  //   canActivate: []
  // },
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  //   data: {
  //     title: TitleConstants.REGISTER
  //   },
  //   canActivate: []
  // },
  {
    path: 'error-403',
    component: ErrorForbiddenPageComponent,
    data: {},
    canActivate: []
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
    data: {
      title: TitleConstants.PAGE_NOT_FOUND
    },
    canActivate: []
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
