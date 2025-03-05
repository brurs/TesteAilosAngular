import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { CoopService } from 'app/services/coop/coop.service';
import { CoopData } from 'app/models/coop-data/coop-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'new-coop-beginning',
  imports: [FormsModule, CommonModule],
  templateUrl: './new-coop-beginning.component.html',
  styleUrl: './new-coop-beginning.component.css'
})
export class NewCoopBeginningComponent {
  constructor(private toastr: ToastrService,
              private coop: CoopService) {}

  @Input() cpfFount!: () => void;

  cpfValue: string = '';
  validCPF: boolean = false;
  coopData: CoopData | undefined = undefined;

  changeCPF() {
    this.validCPF = this.cpfValue.length === 11;
  }

  getCoopData() {
    this.coop.getCoopData(this.cpfValue).then((response) => {
      this.coopData = response;
      this.cpfFount();
    }).catch((error) => {
      this.toastr.error(error.message);
    })
  }
}
