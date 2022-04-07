import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { CustomerTypeComponent } from './customer/customer-type/customer-type.component';
import { PositionComponent } from './employee/position/position.component';
import { FacilityComponent } from './facility/facility/facility.component';
import { ServiceComponent } from './service/service/service.component';
import {DivisionComponent} from "./employee/division/division.component";
import {EducationDegreeComponent} from "./employee/education-degree/education-degree.component";
import { RentTypeComponent } from './service/rent-type/rent-type.component';
import { ServiceTypeComponent } from './service/service-type/service-type.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ListEmployeeComponent,
    ListCustomerComponent,
    CustomerTypeComponent,
    PositionComponent,
    FacilityComponent,
    ServiceComponent,
    DivisionComponent,
    EducationDegreeComponent,
    RentTypeComponent,
    ServiceTypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
