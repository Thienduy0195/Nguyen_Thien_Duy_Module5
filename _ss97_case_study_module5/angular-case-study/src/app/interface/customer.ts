import {CustomerType} from "./customer-type";

export interface Customer {
  id: number;
  code: string;
  name: string;
  birthday: string;
  gender: number;
  idCard: string;
  phoneNumber: string;
  email: string;
  address: string;
  customerType: CustomerType;
}
