import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchFileManagerComponent } from './batch-file-manager.component';

describe('BatchFileManagerComponent', () => {
  let component: BatchFileManagerComponent;
  let fixture: ComponentFixture<BatchFileManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchFileManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchFileManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
