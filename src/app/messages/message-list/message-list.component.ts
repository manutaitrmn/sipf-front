import { Component, OnInit } from '@angular/core';
import {MessageDataService} from "../../services/data/message-data.service";

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'message', 'creationDate', 'modificationDate', 'status', 'controls'];

  messages: any[] = []

  constructor(private messageService: MessageDataService) { }

  ngOnInit(): void {
    this.refreshMessages()
  }

  refreshMessages() {
    this.messageService.retrieveAll().subscribe(response => this.messages = response)
  }

  onDelete(id: Number) {
    this.messageService.delete(id).subscribe(response => this.refreshMessages())
  }

}
