import {Customer} from "./customer";
import {Service} from "./service";

export interface Contract {
  id: number;
  customer: Customer;
  service: Service;
  startDate: string;
  endDate: string;
  deposit: string;
}
