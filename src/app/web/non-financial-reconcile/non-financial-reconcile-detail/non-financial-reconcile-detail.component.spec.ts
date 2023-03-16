import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonFinancialReconcileDetailComponent } from './non-financial-reconcile-detail.component';

describe('NonFinancialReconcileDetailComponent', () => {
  let component: NonFinancialReconcileDetailComponent;
  let fixture: ComponentFixture<NonFinancialReconcileDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonFinancialReconcileDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonFinancialReconcileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
