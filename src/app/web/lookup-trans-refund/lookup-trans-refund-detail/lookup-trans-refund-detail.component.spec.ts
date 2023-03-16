import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupTransRefundDeatilComponent } from './lookup-trans-refund-detail.component';

describe('LookupTransRefundDeatilComponent', () => {
  let component: LookupTransRefundDeatilComponent;
  let fixture: ComponentFixture<LookupTransRefundDeatilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupTransRefundDeatilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupTransRefundDeatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
