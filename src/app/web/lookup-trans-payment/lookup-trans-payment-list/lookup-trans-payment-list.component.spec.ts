import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupTransPaymentListComponent } from './lookup-trans-payment-list.component';

describe('LookupTransPaymentListComponent', () => {
  let component: LookupTransPaymentListComponent;
  let fixture: ComponentFixture<LookupTransPaymentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupTransPaymentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupTransPaymentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
