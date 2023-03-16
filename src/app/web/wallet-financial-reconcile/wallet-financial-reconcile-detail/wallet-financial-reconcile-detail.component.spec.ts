import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletFinancialReconcileDetailComponent } from './wallet-financial-reconcile-detail.component';

describe('WalletFinancialReconcileDetailComponent', () => {
  let component: WalletFinancialReconcileDetailComponent;
  let fixture: ComponentFixture<WalletFinancialReconcileDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletFinancialReconcileDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletFinancialReconcileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
