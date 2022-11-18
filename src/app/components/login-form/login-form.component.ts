import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  @Output() clickLoginButton = new EventEmitter()
  // @Output() clickLoginButton: EventEmitter<any> = new EventEmitter()

  loginButton(): void {
    this.clickLoginButton.emit()
  }
}
