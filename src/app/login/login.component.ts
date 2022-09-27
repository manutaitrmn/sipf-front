import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild("f") loginForm: NgForm | undefined;

	constructor(private router: Router, private authenticationService: AuthenticationService) {}

	ngOnInit(): void {}

	login() {
    const { username, password } = this.loginForm?.value
		if (this.authenticationService.authenticate(username, password)) {
		  this.router.navigate([''])
		}
	}
}
