import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonFinancialTransactionsReportComponent } from './non-financial-transactions-report.component';

describe('NonFinancialTransactionsReportComponent', () => {
  let component: NonFinancialTransactionsReportComponent;
  let fixture: ComponentFixture<NonFinancialTransactionsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonFinancialTransactionsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonFinancialTransactionsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
