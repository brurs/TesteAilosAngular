import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCoopAdmissionComponent } from './new-coop-admission.component';

describe('NewCoopAdmissionComponent', () => {
  let component: NewCoopAdmissionComponent;
  let fixture: ComponentFixture<NewCoopAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCoopAdmissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCoopAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
