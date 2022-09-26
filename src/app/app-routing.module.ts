import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouteGuardService } from './services/route-guard.service';
import {MessagesComponent} from "./messages/messages.component";
import {MessageListComponent} from "./messages/message-list/message-list.component";
import {BaseComponent} from "./base/base.component";
import {MessageNewComponent} from "./messages/message-new/message-new.component";
import {MessageEditComponent} from "./messages/message-edit/message-edit.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',
    component: BaseComponent,
    canActivate: [RouteGuardService],
    children: [
      { path: '', component: HomeComponent },
      { path: 'messages',
        component: MessagesComponent,
        children: [
          { path: '', component: MessageListComponent },
          { path: 'new', component: MessageNewComponent },
          { path: ':id/edit', component: MessageEditComponent },
        ]
      },
    ]
  },

  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
