import {Component, OnInit} from '@angular/core';
import {RentType} from "../../model/RentType";

@Component({
  selector: 'app-rent-type',
  templateUrl: './rent-type.component.html',
  styleUrls: ['./rent-type.component.css']
})
export class RentTypeComponent implements OnInit {
  rentType: RentType[] = [
    {id: 1, name: 'Giờ', cost: '1000000'},
    {id: 2, name: 'Tuần', cost: '10000000'},
    {id: 3, name: 'Ngày', cost: '100000000'},
    {id: 4, name: 'Tháng', cost: '1000000000'},
    {id: 5, name: 'Năm', cost: '10000000000'},
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
