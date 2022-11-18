import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myNumber: number = 0;

  dataReceivedShow: string = ``;
  dataTextToShow = `Dado recebido: `;

  dataSendReceived(dataOutput: string) {
    console.log(dataOutput);
    if (dataOutput == '') {
      return this.cleanDataShow(dataOutput);
    }
    this.dataTextToShow = `Dado recebido: `;
    this.dataReceivedShow = `${dataOutput}`;
  }

  cleanDataShow(dataOutput: string) {
    this.dataTextToShow = ``;
    this.dataReceivedShow = ``;
  }

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
