import { Component, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-enter-details',
  templateUrl: './enter-details.component.html',
  styleUrls: ['./enter-details.component.scss'],
})
export class EnterDetailsComponent {
  constructor(private ApiService: ApiService) {}
  userInfo: any = [];

  username: any = [];
  @Output() showDetailsComp = new EventEmitter<any>();
  changeComp() {
    this.ApiService.getRepos(this.username);
    this.ApiService.getUser(this.username);
    this.showDetailsComp.emit();
  }
}
