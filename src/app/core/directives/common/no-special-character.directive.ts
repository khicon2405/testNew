import { Directive, ElementRef, HostListener, Input } from "@angular/core";
import { NgControl } from "@angular/forms";
import { SpecialKeyCheck } from "./special-key-ultis";

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: "[appNoSpecialCharacter]",
})
export class NoSpecialCharacterDirective {
  @Input() isEng = false;
  @Input() isUsername = false;
  @Input() isBankAccount = false;
  private specialKeys = [
    "Backspace",
    "Tab",
    "End",
    "Home",
    "ArrowLeft",
    "ArrowRight",
    "Delete",
  ];

  constructor(private el: ElementRef, private control: NgControl) { }

  @HostListener("input", ["$event"])
  onInput(event) {
    const val = event.target.value;
    let r = "";
    if (this.isUsername) {
      r = val.replace(/[`~!#$%^&*()|+=?;:'",<>\{\}\[\]\\\/]/gi, "");
    } else if (this.isBankAccount) {
      r = val.replace(/[0-9`~!#$%^&*()|+=?;:'",<>\{\}\[\]\\\/]/gi, "");
    } else {
      r = val.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "");
    }
    if (val) {
      this.control.control.setValue(r);
    }
  }

  @HostListener("keypress", ["$event"]) onKeyPress(event) {
    const e = <KeyboardEvent>event;
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    if (SpecialKeyCheck.checkKeys(e)) {
      return;
    }
    let specials = [
      ",",
      "<",
      ">",
      "/",
      "?",
      ";",
      ":",
      "'",
      '"',
      "[",
      "{",
      "]",
      "}",
      "\\",
      "|",
      "`",
      "~",
      "!",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "=",
      "+",
    ];
    if (!this.isUsername) {
      specials = specials.concat([".", "-", "_", "@"]);
    }
    if (specials.indexOf(e.key) !== -1) {
      e.preventDefault();
    }
  }
}
