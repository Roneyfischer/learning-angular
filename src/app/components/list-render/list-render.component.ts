import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  @Output() usersOutput = new EventEmitter<any>();

  users = [
    { userName: '0123', type: 'adm' },
    { userName: 'roneyUser', type: 'standard' },
    { userName: 'testUser', type: 'adm' },
    { userName: 'Other-Test-User', type: 'guest' },
  ];

  exibeUsers() {
    this.usersOutput.emit();
  }
}
