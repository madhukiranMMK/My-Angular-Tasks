import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vowels',
  templateUrl: './vowels.component.html',
  styleUrls: ['./vowels.component.css']
})
export class VowelsComponent implements OnInit {

  vowelsLength: number;

  constructor() { }

  ngOnInit() {
  }

  vowelsCounter(text) {
    
    debugger;

    let matchedVowels = text.match(/[aeiou]/gi);

    if (matchedVowels) {

      this.vowelsLength = matchedVowels.length;
    }

    else {

      this.vowelsLength = 0;

    }



  }


}
