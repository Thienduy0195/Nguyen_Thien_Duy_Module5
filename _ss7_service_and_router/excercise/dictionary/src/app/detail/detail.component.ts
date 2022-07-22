import { Component, OnInit } from '@angular/core';
import {Word} from "../word";
import {DictionaryService} from "../dictionary.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  word: Word;
  constructor(private dictionaryService: DictionaryService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const w = this.activateRoute.snapshot.params.word;
    this.word = this.dictionaryService.findByWord(w);
  }

}
