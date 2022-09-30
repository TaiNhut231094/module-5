import {Component, OnInit} from '@angular/core';
import {DictionaryService} from '../../service/dictionary.service';
import {IWord} from '../IWord';

@Component({
  selector: 'app-dictionary',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  dictionaries: IWord[] = this.dictionaryService.translate();

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
  }
}
