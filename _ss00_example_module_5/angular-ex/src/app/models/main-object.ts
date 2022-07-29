import {SubObject} from "./sub-object";

export interface MainObject {
  id?: number;
  price: number;
  startDes: string;
  endDes: string;
  startDate: string;
  startHour: string;
  subObject: SubObject;
  amount: number;
}
