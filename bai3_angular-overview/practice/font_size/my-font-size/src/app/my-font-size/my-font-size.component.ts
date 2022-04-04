import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-font-size',
  templateUrl: './my-font-size.component.html',
  styleUrls: ['./my-font-size.component.css']
})
export class MyFontSizeComponent implements OnInit {
fontSize = 14
  constructor() { }

  ngOnInit(): void {
  }

  changeFontSizeValue(fontSize) {
    this.fontSize = fontSize;
  }

}
