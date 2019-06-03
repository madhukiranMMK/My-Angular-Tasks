import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chars',
  templateUrl: './chars.component.html',
  styleUrls: ['./chars.component.css']
})
export class CharsComponent implements OnInit {

  mostOccuredCharacter: string;

  constructor() { }

  ngOnInit() {
  }

   characterThatOccuredMostTimes(text) {

    debugger;

    let characterThatMap = {};
    let maxCharcterValue = 0;
    this.mostOccuredCharacter = ''

    for (let character of text) {

        if (characterThatMap.hasOwnProperty(character)) {

          characterThatMap[character]++;

        } 
        else {

          characterThatMap[character] = 1;

        }
    }

    for (let character in characterThatMap) {

        if (characterThatMap[character] > maxCharcterValue) {

          maxCharcterValue = characterThatMap[character];
          
          this.mostOccuredCharacter = character;

        }
    }

}

}
