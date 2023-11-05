import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss'],
})
export class userReposComponent implements OnInit {
  dataSubscription: any = '';
  ngOnInit(): void {
    this.ApiService.repositories$.subscribe((repositories) => {
      this.dataSubscription = repositories;
    });
  }
  constructor(private ApiService: ApiService) {}
}
