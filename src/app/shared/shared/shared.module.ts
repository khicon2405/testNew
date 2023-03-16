import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { DirectivesModule } from 'src/app/core/directives/directives.module';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { PaginationComponent } from '@core/components/pagination/pagination.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

const MODULES = [
  ReactiveFormsModule,
  FormsModule,
  PipesModule,
  DirectivesModule,
  MaterialModule,
  TranslateModule,
  NgxMatSelectSearchModule
];

@NgModule({
  declarations: [PaginationComponent],
  imports: [
    ...MODULES,
  ],
  exports: [
    HttpClientModule,
    ...MODULES,
    DeviceDetectorModule,
    PaginationComponent
  ],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }

