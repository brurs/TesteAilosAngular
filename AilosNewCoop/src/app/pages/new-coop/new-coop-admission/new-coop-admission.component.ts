import { Component } from '@angular/core';
import { NewCoopBeginningComponent } from "../new-coop-beginning/new-coop-beginning.component";
import { StepperComponent } from "../../../components/stepper/stepper.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'new-coop-admission',
  imports: [NewCoopBeginningComponent, StepperComponent, CommonModule],
  templateUrl: './new-coop-admission.component.html',
  styleUrl: './new-coop-admission.component.css'
})
export class NewCoopAdmissionComponent {
  constructor() {}

  title = 'Ailos';
  coopFound: boolean = false;

  cpfFount = () => {
    this.coopFound = true;
  }
}
