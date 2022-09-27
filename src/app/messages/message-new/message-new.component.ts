import {Component} from '@angular/core';
import {MessageDataService} from "../../services/data/message-data.service";

@Component({
  selector: 'app-message-new',
  templateUrl: './message-new.component.html',
  styleUrls: ['./message-new.component.scss']
})
export class MessageNewComponent {

  content: string = ""
  status: string = "true"
  success: String | undefined
  error: String | undefined

  constructor(private messageService: MessageDataService) { }

  onSubmit() {
    this.success = undefined
    this.error = undefined
    let status = this.status === "true"
    if (this.content !== "") {
      this.messageService.create({ content: this.content, active: status }).subscribe(response => {
        this.success = "Message ajouté."
        this.content = ""
      }, error => this.error = error)
    } else {
      this.error = "Veuillez rentrer un message."
    }

  }

}
