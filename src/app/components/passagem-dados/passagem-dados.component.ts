import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-passagem-dados',
  templateUrl: './passagem-dados.component.html',
  styleUrls: ['./passagem-dados.component.css'],
})
export class PassagemDadosComponent {
  @Output() dataOutput: EventEmitter<string> = new EventEmitter();

  dataToSend: string = 'DADO PARA SER ENVIADO ENTRE COMPONENTES!';

  outputToParent():void {
    this.dataOutput.emit(this.dataToSend);
  }

  cleanOutputToParent(){
    this.dataOutput.emit("")
  }
}
