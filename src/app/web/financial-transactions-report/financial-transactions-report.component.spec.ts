import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialTransactionsReportComponent } from './financial-transactions-report.component';

describe('FinancialTransactionsReportComponent', () => {
  let component: FinancialTransactionsReportComponent;
  let fixture: ComponentFixture<FinancialTransactionsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialTransactionsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialTransactionsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
