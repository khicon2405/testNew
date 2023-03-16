import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
import { SpecialKeyCheck } from './special-key-ultis';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[appNumberOnly]'
})
export class NumberOnlyDirective {
  private specialKeys = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Delete'];

  constructor(private control: NgControl) { }

  @HostListener('input', ['$event']) onInput(event) {
    const val = event.target.value;
    if (val) {
      this.control.control.setValue(val.replace(/[^0-9]*/g, ''));
    }
  }

  @HostListener('keypress', ['$event']) onKeyPress(event) {
    const e = <KeyboardEvent>event;
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    if (SpecialKeyCheck.checkKeys(e)) {
      return;
    }
    if (
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].indexOf(e.key) === -1
    ) {
      e.preventDefault();
    }
  }
}
