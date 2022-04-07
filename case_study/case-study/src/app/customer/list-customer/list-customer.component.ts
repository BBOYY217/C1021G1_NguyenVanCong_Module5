import { Component, OnInit } from '@angular/core';
import {Customer} from "../../model/Customer";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customer: Customer[] =[
  {id:1,name:'Tran Van A',date:'12/03/2001',gender:'nam',idCard:'123456789',phoneNumber:'0123456789',address:'DN',email:'a@gmai.com',customerType:{id:1,name:'Diamond'}},
  {id:2,name:'Tran Van B',date:'12/03/2001',gender:'nam',idCard:'123456789',phoneNumber:'0123456789',address:'DN',email:'a@gmai.com',customerType:{id:2,name:'Platinum'}},
  {id:3,name:'Tran Van C',date:'12/03/2001',gender:'nam',idCard:'123456789',phoneNumber:'0123456789',address:'DN',email:'a@gmai.com',customerType:{id:3,name:'Gold'}}
]
  constructor() { }

  ngOnInit(): void {
  }

}
