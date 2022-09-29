import {Component, OnInit} from '@angular/core';
import {DictionaryService} from '../../service/dictionary.service';
import {Iword} from '../iword';

@Component({
  selector: 'app-dictionary',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  wordList: Iword[] = this.dictionaryService.translate();

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
  }
}
