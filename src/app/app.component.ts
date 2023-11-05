import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showEnterDetails: boolean = true;
  userInfo: string = '';

  hideEnterDetails() {
    this.showEnterDetails = false;
  }
}
