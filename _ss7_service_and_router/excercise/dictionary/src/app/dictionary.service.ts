import {Injectable} from '@angular/core';
import {Word} from './word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  word: Word;
  private words: Word[] = [
    {
      word: 'hello',
      meaning: 'xin chào'
    },
    {
      word: 'thank',
      meaning: 'cảm ơn'
    },
    {
      word: 'developer programming',
      meaning: 'lập trình viên'
    },
    {
      word: 'information',
      meaning: 'thông tin'
    },
    {
      word: 'excellent',
      meaning: 'xuất sắc'
    },
  ];

  constructor() {
  }

  search(word: string): string {
    if (!word) {
      return '';
    }
    const result = this.words.find(item => item.word.toLowerCase() === word.toLowerCase());
    if (result) {
      return result.meaning;
    }
    return 'Not found searching word!';
  }

  getAll(): Word[] {
    return this.words;
  }

  findByWord(word: string): Word {
    this.word = this.words.find(item => item.word.toLowerCase() === word.toLowerCase());
    return this.word;
  }
}
