import {ServiceType} from "./service-type";
import {RentType} from "./rent-type";

export interface Service {
  id: number;
  name: string;
  area: string;
  cost: string;
  maxPeople: string;
  roomStandard: string;
  otherConvenience: string;
  poolArea: string;
  numberOfFloors: string;
  freeService: string;
  serviceType: ServiceType;
  rentType: RentType;
  img: string;
}
