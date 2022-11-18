import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  size = 10;
  font = 'arial';
  color = reduce;


}
