import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseModel, Hospital } from '../classes/hospital.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root',
})
export class HospitalService {
  constructor(private http: HttpClient) {}

  registerHospital(hospital: Hospital): Observable<ApiResponseModel> {
    return this.http.post<ApiResponseModel>(
      environment.api_url + Constant.API_END_POINT.ADD_NEW_HOSPITAL,
      hospital
    );
  }
}
