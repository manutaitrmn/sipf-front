import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  routes: { name: String, path: String }[] = [
    { name: "Messages", path: "/messages" }
  ]

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onLogOut() {
    this.authenticationService.unauthenticate()
    this.router.navigate(['/login'])
  }

}
