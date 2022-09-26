import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { MessagesComponent } from './messages/messages.component';
import { HeaderComponent } from './header/header.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { BaseComponent } from './base/base.component';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import { MessageNewComponent } from './messages/message-new/message-new.component';
import { MessageEditComponent } from './messages/message-edit/message-edit.component';
import {MatSelectModule} from "@angular/material/select";
import localeFr from "@angular/common/locales/fr";
import {registerLocaleData} from "@angular/common";
import { MessageBannerComponent } from './messages/message-banner/message-banner.component';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    HomeComponent,
    MessagesComponent,
    HeaderComponent,
    MessageListComponent,
    BaseComponent,
    MessageNewComponent,
    MessageEditComponent,
    MessageBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
