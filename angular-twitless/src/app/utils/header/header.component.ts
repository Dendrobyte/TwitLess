import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // TODO: Make this image pulled from backend when login is done (pretty obvious)
  pfpUrl: string = '../../../assets/images/mark_pfp.jpg';
  username: string = 'Mobkinz'
  // TODO: Make this a timer that updates properly
  timestamp: string = 0 + 'h' + 57 + 'm'

  constructor() { }

  ngOnInit(): void {

  }

}
