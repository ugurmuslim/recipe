import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent {
  @Output('nvSelected') navigateSelected  = new EventEmitter<{name: string}>();

  navigateLink(navigateBar) {
    this.navigateSelected.emit({
      name: navigateBar
    });
  }
}
