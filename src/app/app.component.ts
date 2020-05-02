import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navigateBar = 'recipes';
  OnNavigateSelected(selectedNavigate: { name: string }) {
    this.navigateBar = selectedNavigate.name;
  }
}
