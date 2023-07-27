import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorchange]',
})
export class ColorchangeDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.color = '#808080';
  }
}
