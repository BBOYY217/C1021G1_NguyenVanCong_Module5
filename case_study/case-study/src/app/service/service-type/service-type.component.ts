import { Component, OnInit } from '@angular/core';
import {ServiceType} from "../../model/ServiceType";

@Component({
  selector: 'app-service-type',
  templateUrl: './service-type.component.html',
  styleUrls: ['./service-type.component.css']
})
export class ServiceTypeComponent implements OnInit {
serviceType : ServiceType[] = [
  {id:1,name:'Room'},
  {id:2,name:'House'},
  {id:3,name:'Villa'}
]
  constructor() { }

  ngOnInit(): void {
  }

}
