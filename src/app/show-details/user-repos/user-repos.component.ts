import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss'],
})
export class userReposComponent implements OnInit {
  dataSubscription: any = '';
  pageSize: number = 10;
  p: number = 1;
  total: number = 0;
  ngOnInit(): void {
    this.ApiService.repositories$.subscribe((repositories) => {
      this.dataSubscription = repositories;
      this.total = repositories.length;
      console.log(repositories);
      console.log(repositories.length);
    });
  }
  constructor(private ApiService: ApiService) {}
}
