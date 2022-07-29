import {Company} from "./company";

export interface Ticket {
  id?: number;
  price: number;
  startDes: string;
  endDes: string;
  startDate: string;
  startHour: string;
  company: Company;
  amount: number;
}
