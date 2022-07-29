import {CustomerType} from "./customer-type";

export interface Customer {
  id: number;
  customerCode: string;
  name: string;
  birthDay: string;
  gender: number;
  idCard: string;
  phone: string;
  email: string;
  address: string;
  customerType: {
    id: number,
    name: string
  };
  status: number;
}
