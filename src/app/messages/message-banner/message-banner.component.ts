import { Component, OnInit } from '@angular/core';
import {Message, MessageDataService} from "../../services/data/message-data.service";

@Component({
  selector: 'app-message-banner',
  templateUrl: './message-banner.component.html',
  styleUrls: ['./message-banner.component.scss']
})
export class MessageBannerComponent implements OnInit {

  messages: Message[] | undefined;

  constructor(private messageService: MessageDataService) { }

  ngOnInit(): void {
    this.refreshMessages()
  }

  refreshMessages() {
    this.messageService.retrieveActive().subscribe(response => this.messages = response)
  }

}
