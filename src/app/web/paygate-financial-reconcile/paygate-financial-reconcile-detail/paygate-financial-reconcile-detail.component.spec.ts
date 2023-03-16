import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaygateFinancialReconcileDetailComponent } from './paygate-financial-reconcile-detail.component';

describe('PaygateFinancialReconcileDetailComponent', () => {
  let component: PaygateFinancialReconcileDetailComponent;
  let fixture: ComponentFixture<PaygateFinancialReconcileDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaygateFinancialReconcileDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaygateFinancialReconcileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
