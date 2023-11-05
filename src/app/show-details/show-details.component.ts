import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss'],
})
export class ShowDetailsComponent implements OnInit {
  constructor(private ApiService: ApiService) {}
  userInfo: any = '';
  show: boolean = false;
  dataSubscription: any = '';
  ngOnInit(): void {
    this.ApiService.details$.subscribe((details) => {
      this.userInfo = details;
      if (
        this.ApiService.showDetailsLoading &&
        this.ApiService.showReposLoading
      ) {
        this.show = true;
      } else {
        this.show = false;
      }
    });
    this.ApiService.repositories$.subscribe((repositories) => {
      this.dataSubscription = repositories;
      if (
        this.ApiService.showDetailsLoading &&
        this.ApiService.showReposLoading
      ) {
        this.show = true;
      } else {
        this.show = false;
      }
    });
  }
}
