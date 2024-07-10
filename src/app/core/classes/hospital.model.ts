export class Hospital {
  hospitalId: number;
  hospitalName: string;
  hospitalAddress: string;
  hospitalCity: string;
  hospitalContactNo: string;
  hospitalOwnerName: string;
  hospitalOwnerContactNo: string;
  hospitalEmailId: string;
  userName: string;
  password: string;

  constructor() {
    this.hospitalId = 0;
    this.hospitalName = '';
    this.hospitalAddress = '';
    this.hospitalCity = '';
    this.hospitalContactNo = '';
    this.hospitalOwnerName = '';
    this.hospitalOwnerContactNo = '';
    this.hospitalEmailId = '';
    this.userName = '';
    this.password = '';
  }
}

export interface ApiResponseModel {
  message: string;
  result: boolean;
  data: any;
}
