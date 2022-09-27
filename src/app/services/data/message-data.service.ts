import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { API_URL } from "../../app.constants";

@Injectable({
  providedIn: 'root'
})
export class MessageDataService {
  constructor(private http: HttpClient) {}

  public retrieveAll() {
    return this.http.get<Message[]>(API_URL + "/message/read")
  }

  public retrieveActive() {
    return this.http.get<Message[]>(API_URL + "/message/read/active")
  }

  public retrieveOne(id: number) {
    return this.http.get<Message>(API_URL + "/message/read/" + id)
  }

  public update(id: number, message: Message) {
    return this.http.put<Message>(API_URL + "/message/update/" + id, message)
  }

  public create(message: { content: String, active: boolean }) {
    return this.http.post<Message>(API_URL + "/message/create", message)
  }

  public delete(id: Number) {
    return this.http.delete(API_URL + "/message/delete/" + id, { responseType: 'text' })
  }

}

export class Message {
  constructor(public id: number | undefined, public content: string | undefined, public active: boolean) {}
}
