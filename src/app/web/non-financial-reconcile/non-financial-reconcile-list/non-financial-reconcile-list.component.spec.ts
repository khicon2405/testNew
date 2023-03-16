import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonFinancialReconcileListComponent } from './non-financial-reconcile-list.component';

describe('NonFinancialReconcileListComponent', () => {
  let component: NonFinancialReconcileListComponent;
  let fixture: ComponentFixture<NonFinancialReconcileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonFinancialReconcileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonFinancialReconcileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
