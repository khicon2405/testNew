import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupTransRefundListComponent } from './lookup-trans-refund-list.component';

describe('LookupTransRefundListComponent', () => {
  let component: LookupTransRefundListComponent;
  let fixture: ComponentFixture<LookupTransRefundListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupTransRefundListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupTransRefundListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
