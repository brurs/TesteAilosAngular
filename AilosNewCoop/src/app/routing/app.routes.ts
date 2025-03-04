import { Routes } from '@angular/router';
import { NewCoopAdmissionComponent } from 'app/pages/new-coop/new-coop-admission/new-coop-admission.component';

export const routes: Routes = [
  { path: "NewCoop", component: NewCoopAdmissionComponent },
  { path: "**", component: NewCoopAdmissionComponent }
];
