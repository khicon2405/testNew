import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppComponent } from './core/app/app.component';
import { AppRoutingModule } from './core/app/app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { WebModule } from './web/web.module';
import { SharedModule } from './shared/shared/shared.module';
import { registerLocaleData, CommonModule } from '@angular/common';
import localeFr from '@angular/common/locales/vi';
import { ServicesModule } from './shared/shared/services.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { AuthGuardService } from '@core/authentication/auth-guard.service';
import { InterceptorModule } from '@core/interceptors/interceptor.module';
import { ToastrModule } from 'ngx-toastr';
import { FormValidatorModule } from './shared/validators';
import { MultiTranslateHttpLoader } from '@core/services/multi-language';
import { LANGUAGE_FILE } from '@core/constants/language.constant';
import { DialogConfirmComponent } from '@core/components/common/dialogs/dialog-confirm/dialog-confirm.component';
import { ConfigService } from '@core/services/configuration/configuration.service';

registerLocaleData(localeFr, 'vi');
export const configFactory = (configService: ConfigService) => {
  return () => configService.loadConfig();
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    WebModule,
    SharedModule,
    FormValidatorModule,
    InterceptorModule,
    ServicesModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createmMultiTranslateLoader,
        deps: [HttpClient]
      }
    }),
    DeviceDetectorModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  entryComponents: [
    DialogConfirmComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [ConfigService],
      multi: true
    },
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createmMultiTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, LANGUAGE_FILE);
}


