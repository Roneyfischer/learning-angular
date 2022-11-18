

import { Component } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent {
  private apiUrl = 'hhtp://localhost3333';
  showDiv: boolean = false;
  ngOnInit(): void {}

  showMessage(): void {
    this.showDiv = !this.showDiv; //toggle
  }
  // sendPostUserLogin = async () => {
  //   this.showDiv = true;

  //   const reqBody = {
  //     type: 'register',
  //     completeName: '456',
  //     cpf: '456',
  //     email: '456',
  //     pass: '456',
  //     passConfirmation: '456',
  //   };

  //   fetch(`hhtp://localhost:3333`, {
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     method: 'POST',
  //     credentials: 'include',
  //     body: JSON.stringify(reqBody),
  //   })
  //     .then((res) => {
  //       return console.log('a respsota é: ' + res);
  //     })
  //     .catch((err) => {
  //       return console.log('a respsota é: ' + err);
  //     });
  // };
}
