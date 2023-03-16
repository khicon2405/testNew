import { Directive, HostListener, Input, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { SpecialKeyCheck } from './special-key-ultis';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[codeNameOnly]'
})
export class CodeNameDirective {
  @Input() isEng = false;
  @Input() isUsername = false;
  private specialKeys = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Delete', 'Space', 'Hyper'];

  constructor(private el: ElementRef, private control: NgControl) { }

  @HostListener('input', ['$event'])
  onInput(event) {
    const val = event.target.value;
    const r = val.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/ /g, '');
    if (val) {
      this.control.control.setValue(r);
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
    let specials = [',', '<', '>', '/', '?', ';', ':', '\'', '\"', '[', '{', ']', '}', '\\', '|', '`', '~', '!',
      '#', '$', '%', '^', '&', '*', '(', ')', '=', '+', '.', '-', '_', '@'];
    if (specials.indexOf(e.key) !== -1 || e.keyCode === 32 || e.keyCode < 48 || e.keyCode > 122) {
      e.preventDefault();
    }
  }
}
