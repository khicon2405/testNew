import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaygateFinancialReconcileListComponent } from './paygate-financial-reconcile-list.component';

describe('PaygateFinancialReconcileListComponent', () => {
  let component: PaygateFinancialReconcileListComponent;
  let fixture: ComponentFixture<PaygateFinancialReconcileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaygateFinancialReconcileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaygateFinancialReconcileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
