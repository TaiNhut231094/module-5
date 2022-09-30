import {Injectable} from '@angular/core';
import {IWord} from '../dictionary/IWord';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionaries: IWord[] = [{
    word: 'She', mean: 'cô ấy'}, {
    word: 'Book', mean: 'quyển sách'}, {
    word: 'House', mean: 'căn nhà'}, {
    word: 'He', mean: 'anh ấy, đàn ông'}, {
    word: 'You', mean: 'bạn'}, {
    word: 'History', mean: 'lịch sử'}, {
    word: 'Person', mean: 'người, người nào, nhân vật'}, {
    word: 'Sorry', mean: 'lấy làm tiếc, lấy làm buồn'}, {
    word: 'idea', mean: 'ý tưởng'}];

  constructor() {
  }

  translate() {
    return this.dictionaries;
  }

  findByWord(word: string) {
    return this.dictionaries.find(item => item.word === word);
  }
}
