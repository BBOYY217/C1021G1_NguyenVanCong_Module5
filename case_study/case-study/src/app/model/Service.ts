import {RentType} from "./RentType";
import {ServiceType} from "./ServiceType";

export interface Service {
  id: any
  name: string
  area: string
  cost: string
  maxPeople: string
  rentType: RentType
  service: ServiceType
  standRoom: string
  descriptionOtherConvenience: string
  poolArea: string
  numberOfFloor: string
}
