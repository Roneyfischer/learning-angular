import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css'],
})
export class ParentDataComponent {
@Input() userNameInputChild!:string
@Input() reqBodyInputChild!:{status: boolean, message: string}
}
