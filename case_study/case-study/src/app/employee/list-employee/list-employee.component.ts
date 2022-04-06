import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
employee  = [
  {id: 1,name:'Nguyen Van A',date:"21/01/2001",idCard:'123456789',phoneNumer:'0123456789',email:'a@gmail.com',educationDegree:'sau dai hoc',position:'nhan vien',salary:'5000'},
  {id: 2,name:'Nguyen Van B',date:"21/01/2001",idCard:'123456789',phoneNumer:'0123456789',email:'a@gmail.com',educationDegree:'sau dai hoc',position:'nhan vien',salary:'5000'},
  {id: 3,name:'Nguyen Van C',date:"21/01/2001",idCard:'123456789',phoneNumer:'0123456789',email:'a@gmail.com',educationDegree:'sau dai hoc',position:'nhan vien',salary:'5000'},
];
  constructor() { }

  ngOnInit(): void {
  }

}
