import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class userDetailsComponent implements OnInit {
  userInfo: any = '';
  constructor(private ApiService: ApiService) {}
  ngOnInit(): void {
    this.ApiService.details$.subscribe((details) => {
      this.userInfo = details;
      console.log(this.userInfo);
    });
  }
}
