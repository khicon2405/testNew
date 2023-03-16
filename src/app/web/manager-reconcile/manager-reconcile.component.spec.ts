import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ManagerReconcileComponent } from "./manager-reconcile.component";

describe("ManagerReconcileComponent", () => {
  let component: ManagerReconcileComponent;
  let fixture: ComponentFixture<ManagerReconcileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerReconcileComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerReconcileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
