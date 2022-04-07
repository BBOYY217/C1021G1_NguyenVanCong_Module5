import {Positions} from "./Position";
import {EducationDegree} from "./EducationDegree";
import {Division} from "./Division";

export interface Employee {
  id: any
  name: string
  date: string
  idCard: string
  phoneNumber: string
  email: string
  salary: string
  position: Positions
  educationDegree: EducationDegree
  division: Division
}
