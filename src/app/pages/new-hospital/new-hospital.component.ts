import { Component, OnDestroy } from '@angular/core';
import { ApiResponseModel, Hospital } from '../../core/classes/hospital.model';
import { FormsModule } from '@angular/forms';
import { HospitalService } from '../../core/service/hospital.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-hospital',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-hospital.component.html',
  styleUrl: './new-hospital.component.css',
})
export class NewHospitalComponent implements OnDestroy {
  private subscription: Subscription[] = [];
  public hospitalObj: Hospital = new Hospital();

  constructor(private hospitalSer: HospitalService) {}
  ngOnDestroy(): void {
    this.subscription = [];
  }

  onRegister() {
    this.subscription.push(
      this.hospitalSer.registerHospital(this.hospitalObj).subscribe(
        (res: ApiResponseModel) => {
          if (res.result) {
            alert('Registration success.');
          } else {
            alert(res.message);
          }
        },
        (error) => {
          alert(JSON.stringify(error));
        }
      )
    );
  }
}
