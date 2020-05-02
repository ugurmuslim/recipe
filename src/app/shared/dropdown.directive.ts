import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click') toggleOpen() {
    const currentElement = this.el.nativeElement.children[1];
    if (!this.isOpen) {
      this.renderer.addClass(currentElement, 'show');
    } else {
      this.renderer.removeClass(currentElement, 'show');
    }
    this.isOpen = !this.isOpen;
  }
}
