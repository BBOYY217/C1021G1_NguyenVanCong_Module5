import { Component, OnInit } from '@angular/core';
import {Employee} from "../../model/Employee";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employee: Employee[] =[
  {id: 1,name:'Nguyen Van A',date:"21/01/2001",idCard:'123456789',phoneNumber:'0123456789',email:'a@gmail.com',salary:'5000',position:{id:1,name:'Lễ tân'  },educationDegree:{id:4,name:'Sau đại học'},division:{id:3,name:'Phục vụ'}},
  {id: 2,name:'Nguyen Van B',date:"21/01/2001",idCard:'123456789',phoneNumber:'0123456789',email:'a@gmail.com',salary:'5000',position:{id:6,name:'Giám đốc'},educationDegree:{id:4,name:'Sau đại học'},division:{id:4,name:'Quản lý'}},
  {id: 3,name:'Nguyen Van C',date:"21/01/2001",idCard:'123456789',phoneNumber:'0123456789',email:'a@gmail.com',salary:'5000',position:{id:5,name:'Lễ tân ' },educationDegree:{id:4,name:'Sau đại học'},division:{id:3,name:'Phục vụ'}}
];
  constructor() { }

  ngOnInit(): void {
  }

}
