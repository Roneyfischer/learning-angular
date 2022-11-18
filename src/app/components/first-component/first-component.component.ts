import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent {
  name = 'Rôney';
  age = 25;
  job = `"programador por alegria"`;
  hobbies = [
    'programar',
    'se conectar com Deus',
    { nome: 'dormir', horario: 'de noite' },
  ];
  constructor() {}



  
}

