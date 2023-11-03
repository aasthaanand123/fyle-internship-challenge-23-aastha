import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enter-details',
  templateUrl: './enter-details.component.html',
  styleUrls: ['./enter-details.component.scss'],
})
export class EnterDetailsComponent {
  username: string = '';
  @Output() showDetailsComp = new EventEmitter<string>();
  changeComp() {
    this.showDetailsComp.emit(this.username);
  }
}
