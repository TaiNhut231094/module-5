import {Injectable} from '@angular/core';
import {Iword} from '../dictionary/iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionary: Iword[] = [{
    word: 'She', mean: 'cô ấy'
  }, {
    word: 'Book', mean: 'Động từ' +
      'ghi' +
      'record, note, book, calendar\n' +
      'chép' +
      'book, note, engross' +
      'đặt trước' +
      'book, reserve' +
      'ghi vào sổ' +
      'book, docket, list, log' +
      'Danh từ' +
      'sách' +
      'book' +
      'sổ sách' +
      'book, record, register, ledger'
  }, {
    word: 'House', mean: 'căn nhà' +
      'house, compartment' +
      'chổ ở' +
      'dwelling, residence, abode, dwelling place, house, court' +
      'nhà' +
      'home, house, dormitory, dorm, sentry box' +
      'nhà cửa' +
      'home, house, fabric'
  }, {
    word: 'idea', mean: 'Danh từ' +
      'cãm nghĩ' +
      'idea' +
      'điều nghĩ' +
      'idea' +
      'quan niệm' +
      'conception, notion, idea, image, imagination, intellectio' +
      'sáng kiến' +
      'initiative, idea, design, designation' +
      'tư tưởng' +
      'thought, thinking, idea, mind, conception, fancy' +
      'ý kiến' +
      'opinion, idea, mind, thought, notion, thinking' +
      'ý niệm' +
      'idea'
  }];

  constructor() {
  }

  translate() {
    return this.dictionary;
  }

  findByWord(word: string) {
    return this.dictionary.find(item => item.word === word);
  }
}
