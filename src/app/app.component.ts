import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myNumber: number = 0;

  onUsersOutput() {
    console.log('Uhuuuuuuuuuuuuuuul');
  }

  onClickLoginButton() {
    this.myNumber = this.myNumber + 1;
    console.log('Deu certo!');

    // fetch com dados de login
  }

  title = 'curso-angular; ';
  userNameFather = `userName Rôney; `;
  reqBodyFather = { status: true, message: `; Usuário logado com sucesso! ` };
}
