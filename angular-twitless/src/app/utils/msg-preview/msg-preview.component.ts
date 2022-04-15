import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dm-preview',
  templateUrl: './msg-preview.component.html',
  styleUrls: ['./msg-preview.component.css']
})
export class MsgPreviewComponent implements OnInit {

  @Input()
  messageRead: boolean = false;
  @Input()
  username: string = "";
  @Input()
  usertag: string = "";
  @Input()
  message: string = "";

  messagePrev: string = "";

  constructor() { }

  ngOnInit(): void {
    this.messagePrev = this.message.substring(0, 36) + "...";
  }

  markAsRead(): void {
    this.messageRead = true;
  }

}
