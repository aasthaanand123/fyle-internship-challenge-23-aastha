import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss'],
})
export class ShowDetailsComponent implements OnInit {
  constructor(private ApiService: ApiService) {}
  showDetailsLoading: boolean = true;
  showReposLoading: boolean = true;
  userInfo: any = '';
  dataSubscription: any = '';
  ngOnInit(): void {
    this.ApiService.details$.subscribe((details) => {
      this.userInfo = details;
      this.showDetailsLoading = false;
    });
    this.ApiService.repositories$.subscribe((repositories) => {
      this.dataSubscription = repositories;
      this.showReposLoading = false;
    });
  }
}
