import { Component } from '@angular/core';
import { NewCoopBeginningComponent } from "../new-coop-beginning/new-coop-beginning.component";
import { StepperComponent } from "../../../components/stepper/stepper.component";

@Component({
  selector: 'new-coop-admission',
  imports: [NewCoopBeginningComponent, StepperComponent],
  templateUrl: './new-coop-admission.component.html',
  styleUrl: './new-coop-admission.component.css'
})
export class NewCoopAdmissionComponent {
  title = 'Ailos';
}
