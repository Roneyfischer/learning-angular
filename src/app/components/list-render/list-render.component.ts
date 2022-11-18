import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  @Output() usersOutput = new EventEmitter<any>();

  users: User[] = [
    {
      completeName: 'Nome completo',
      cpf: 'cpfffff0821921',
      email: 'emailll@gmail.com',
      group: 'group@gmail.com',
      role: 'role@gmail.com',
    },
    {
      completeName: '2 Nome completo',
      cpf: '2 cpfffff0821921',
      email: '2 emailll@gmail.com',
      group: '2 group@gmail.com',
      role: '2 role@gmail.com',
    },
    {
      completeName: 'Nome completo3',
      cpf: '3 cpfffff0821921',
      email: '3 emailll@gmail.com',
      group: '3 group@gmail.com',
      role: '3 role@gmail.com',
    },
  ];

  userDetails = '';
  showGroup(user: User): void {
    this.userDetails = `O grupo do usuário é ${user.group}, e o cpf é ${user.cpf}`;
  }
  exibeUsers() {
    this.usersOutput.emit();
  }
}
