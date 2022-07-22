import {Component, OnInit} from '@angular/core';
import {DictionaryService} from '../dictionary.service';
import {Word} from '../word';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  listWord: Word[] = [];

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.listWord = this.dictionaryService.getAll();
    console.log(this.listWord);
  }

}
