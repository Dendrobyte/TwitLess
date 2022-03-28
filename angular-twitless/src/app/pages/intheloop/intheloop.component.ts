import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intheloop',
  templateUrl: './intheloop.component.html',
  styleUrls: ['./intheloop.component.css']
})
export class IntheloopComponent implements OnInit {

  constructor() { }

  bannerTopics = [{ title: "Atharv Gets Masters", hashtag: "poggers" }, { title: "Amorian Wins Life", hashtag: "ammonium" }]

  ngOnInit(): void {
  }

}
