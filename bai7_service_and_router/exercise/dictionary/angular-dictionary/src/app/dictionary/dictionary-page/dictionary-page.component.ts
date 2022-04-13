import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../service/dictionary.service';
import {Words} from '../model/words';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  dictionaryList: Words[];

  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
    this.dictionaryList = this.findAll();
  }

  findAll() {
    return this.dictionaryService.findAll();
  }

}
