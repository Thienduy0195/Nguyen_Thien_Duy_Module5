import {Customer} from "./customer";
import {Service} from "./service";

export interface Contract {
  id: number;
  customer: {
    id: number,
    name: string
  };
  service: {
    id: number,
    name: string
  };
  dateStart: string;
  dateEnd: string;
  deposit: string;
  employee: {
    id: number,
    name: string
  }
}
