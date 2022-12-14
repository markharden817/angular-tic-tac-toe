import { Component, Input } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-square',
  template: `
    <button mat-button *ngIf="value == 'O'" class="o-button">{{ value }}</button>
    <button mat-button *ngIf="value == 'X'" class="x-button">{{ value }}</button>
    <button mat-button *ngIf="!value">{{ value }}</button>
  `,
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
  constructor(){};
}
