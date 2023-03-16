import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletFinancialReconcileListComponent } from './wallet-financial-reconcile-list.component';

describe('WalletFinancialReconcileListComponent', () => {
  let component: WalletFinancialReconcileListComponent;
  let fixture: ComponentFixture<WalletFinancialReconcileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletFinancialReconcileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletFinancialReconcileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
