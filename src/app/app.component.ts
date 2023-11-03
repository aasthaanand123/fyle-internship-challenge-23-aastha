import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  showEnterDetails: boolean = true;
  username: string = '';
  ngOnInit() {
    this.apiService.getUser('johnpapa').subscribe(console.log);
  }
  hideEnterDetails(event: string) {
    this.showEnterDetails = false;
    this.username = event;
    // this data is sent to show details
  }
}
