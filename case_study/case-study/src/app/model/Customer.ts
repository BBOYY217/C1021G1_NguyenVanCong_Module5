import {CustomerType} from "./CustomerType";

export interface Customer {
  id: any
  name: string
  date: string
  gender: string
  idCard: string
  phoneNumber: string
  email: string
  address: string
  customerType: CustomerType
}
