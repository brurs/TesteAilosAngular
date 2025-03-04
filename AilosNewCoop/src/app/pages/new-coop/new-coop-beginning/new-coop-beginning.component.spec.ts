import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCoopBeginningComponent } from './new-coop-beginning.component';

describe('NewCoopBeginningComponent', () => {
  let component: NewCoopBeginningComponent;
  let fixture: ComponentFixture<NewCoopBeginningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCoopBeginningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCoopBeginningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
