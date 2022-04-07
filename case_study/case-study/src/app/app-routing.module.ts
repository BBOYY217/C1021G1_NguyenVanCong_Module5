import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListEmployeeComponent} from "./employee/list-employee/list-employee.component";
import {BodyComponent} from "./body/body.component";
import {ListCustomerComponent} from "./customer/list-customer/list-customer.component";


const routes: Routes = [
  {
    path:"list-employee", component:ListEmployeeComponent
  },
  {
    path:"list-customer",component:ListCustomerComponent
  }
  ,{
  path:"",
    component: BodyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
