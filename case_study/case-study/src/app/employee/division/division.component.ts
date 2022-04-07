import {Component, OnInit} from '@angular/core';
import {Division} from "../../model/Division";

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {
  division: Division[] = [
    {id:1, name:'Sale – Marketing'},
    {id:2, name:', Hành Chính'},
    {id:3, name:'Phục vụ'},
    {id:4, name:'Quản lý'}
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
