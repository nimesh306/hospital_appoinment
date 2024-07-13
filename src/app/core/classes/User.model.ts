export class USer {
  userName: string;
  password: string;

  constructor() {
    this.userName = '';
    this.password = '';
  }
}

export interface ApiResponseModel {
  message: string;
  result: boolean;
  data: any;
}
