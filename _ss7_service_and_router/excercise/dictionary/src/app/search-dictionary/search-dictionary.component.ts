import { Component, OnInit } from '@angular/core';
import {Word} from "../word";
import {DictionaryService} from "../dictionary.service";

@Component({
  selector: 'app-search-dictionary',
  templateUrl: './search-dictionary.component.html',
  styleUrls: ['./search-dictionary.component.css']
})
export class SearchDictionaryComponent implements OnInit {

  searchingWord: Word;

  constructor(private dictionaryService: DictionaryService) {
  }

  translate(w: string) {
    console.log(w);
    const mean = this.dictionaryService.search(w);
    this.searchingWord = {
      word: w,
      meaning: mean
    };
  }

  ngOnInit(): void {
  }

}
