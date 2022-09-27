import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Message, MessageDataService} from "../../services/data/message-data.service";

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.scss']
})
export class MessageEditComponent implements OnInit {

  id: number | undefined;
  content: string | undefined;
  status: string | undefined;
  success: string | undefined;
  error: string | undefined;


  constructor(private router: Router, private route: ActivatedRoute, private messageService: MessageDataService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.refreshMessage(this.id)
    })
  }

  refreshMessage(id: number) {
    this.messageService.retrieveOne(id).subscribe(response => {
      if (!response) {
        this.router.navigate(['/messages'])
      } else {
        this.id = response.id
        this.status = String(response.active)
        this.content = response.content
      }
    })
  }

  updateMessage(id: number, message: Message) {
    this.messageService.update(id, message).subscribe(response => this.success = "Message modifié.")
  }

  onSubmit() {
    this.success = undefined;
    let status = this.status === "true"
    this.updateMessage(this.id || -1, new Message(this.id, this.content, status))
  }

}
