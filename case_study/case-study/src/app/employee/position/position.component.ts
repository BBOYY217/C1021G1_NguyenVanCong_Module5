import { Component, OnInit } from '@angular/core';
import {Positions} from "../../model/Position";

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  position : Positions[]=[
    {id:1,name:'Lễ tân'},
    {id:2,name:'Phục vụ'},
    {id:3,name:'Chuyên viên'},
    {id:4,name:'Giám sát'},
    {id:5,name:'Quản lý'},
    {id:6,name:'Giám đốc'}
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
