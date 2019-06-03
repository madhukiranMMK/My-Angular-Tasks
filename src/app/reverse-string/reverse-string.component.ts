import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reverse-string',
  templateUrl: './reverse-string.component.html',
  styleUrls: ['./reverse-string.component.css']
})
export class ReverseStringComponent implements OnInit {

  reversedString: string;

  constructor() { }

  ngOnInit() {
  }

  reverseString(text) {

    debugger;
    
    this.reversedString = text.split("").reverse().join("").toLowerCase(); 

  }


}
