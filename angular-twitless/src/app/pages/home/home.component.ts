import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // TODO: Load quotes from somewhere
  }

  possibleQuotes: string[] = [
    '"Remember what it is you want your life to be and make every decision in service of that dream"',
    '"The good things will always be here waiting for you, should you choose to return to them- but what is important now is that satiate your curiosity"',
    '"Don\'t live in your stories, life only moves forward"'
  ];

  getQuoteText(): string {
    let randInd: number = Math.floor(Math.random() * this.possibleQuotes.length);
    return this.possibleQuotes[randInd];
  }

}
