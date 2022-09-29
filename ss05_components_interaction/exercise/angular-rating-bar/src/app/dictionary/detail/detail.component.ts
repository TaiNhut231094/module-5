import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DictionaryService} from '../../service/dictionary.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  word: any;

  constructor(private dictionary: DictionaryService,
              private activatedRoute: ActivatedRoute,
              private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const word = paramMap.get('word');
      this.word = this.dictionary.findByWord(word);
    });
  }

}
