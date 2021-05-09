import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'lq-error-label',
  templateUrl: './error-label.component.html',
  styleUrls: ['./error-label.component.scss']
})
export class ErrorLabelComponent {

  @Input() control: AbstractControl;

  constructor() {
  }
}
