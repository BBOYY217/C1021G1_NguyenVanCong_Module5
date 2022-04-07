import { Component, OnInit } from '@angular/core';
import {EducationDegree} from "../../model/EducationDegree";

@Component({
  selector: 'app-education-degree',
  templateUrl: './education-degree.component.html',
  styleUrls: ['./education-degree.component.css']
})
export class EducationDegreeComponent implements OnInit {
  educationDegree : EducationDegree[]=[
    {id:1,name:'Trung cấp'},
    {id:2,name:'Cao đẳng'},
    {id:3,name:'Cao đẳng'},
    {id:4,name:'Sau đại học'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
