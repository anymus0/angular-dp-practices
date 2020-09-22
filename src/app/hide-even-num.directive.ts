import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHideEvenNum]'
})
export class HideEvenNumDirective {
  @Input('appHideEvenNum') numToCheck: number;

  private hideEvenNum(num: number) {
    if((num % 2) === 0) {
      this.el.nativeElement.style.visibility = 'hidden';
    }
  }

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.hideEvenNum(this.numToCheck)
  }
}
