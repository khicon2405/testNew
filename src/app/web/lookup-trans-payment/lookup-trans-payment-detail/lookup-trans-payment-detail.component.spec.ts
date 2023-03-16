import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupTransPaymentDeatilComponent } from './lookup-trans-payment-detail.component';

describe('LookupTransPaymentDeatilComponent', () => {
  let component: LookupTransPaymentDeatilComponent;
  let fixture: ComponentFixture<LookupTransPaymentDeatilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupTransPaymentDeatilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupTransPaymentDeatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
