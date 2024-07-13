import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiResponseModel, USer } from './core/classes/User.model';
import { FormsModule } from '@angular/forms';
import { HospitalService } from './core/service/hospital.service';
import { Constant } from './core/constant/Constant';
import { Hospital } from './core/classes/hospital.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'HAS';

  userObj: USer = new USer();
  private hospitalservice = inject(HospitalService);
  loggedHospitalData: Hospital = new Hospital();

  constructor() {
    const loggedData = localStorage.getItem(
      Constant.LOCAL_STORAGE_KEYS.USER_LOGIN
    );
    if (loggedData != null) {
      this.loggedHospitalData = JSON.parse(loggedData);
    }
  }

  onLogin() {
    this.hospitalservice
      .userLogin(this.userObj)
      .subscribe((res: ApiResponseModel) => {
        if (res.result) {
          this.loggedHospitalData = res.data;
          localStorage.setItem(
            Constant.LOCAL_STORAGE_KEYS.USER_LOGIN,
            JSON.stringify(res.data)
          );
          this.hideLogin();
        } else {
        }
      });
  }

  logOut() {
    this.loggedHospitalData = new Hospital();
    localStorage.removeItem(Constant.LOCAL_STORAGE_KEYS.USER_LOGIN);
    this.hideLogin();
  }

  showLogin() {
    const model = document.getElementById('loginModel');
    if (model != null) {
      model.style.display = 'block';
    }
  }

  hideLogin() {
    const model = document.getElementById('loginModel');
    if (model != null) {
      model.style.display = 'none';
    }
  }
}
