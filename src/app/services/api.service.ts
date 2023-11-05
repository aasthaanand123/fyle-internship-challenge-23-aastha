import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap, throwError } from 'rxjs';
import { Octokit } from 'octokit';
import { environment } from 'src/environments/environment.prod';
const octokit = new Octokit({
  auth: environment.githubToken,
});
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  showDetailsLoading: boolean = true;
  showReposLoading: boolean = true;
  // observable for repositories
  private repositoriesSubject: BehaviorSubject<any[]> = new BehaviorSubject<
    any[]
  >([]);
  repositories$: Observable<any[]> = this.repositoriesSubject.asObservable();
  // observable for user details
  private userDetails: BehaviorSubject<any> = new BehaviorSubject<any[]>([]);
  details$: Observable<any> = this.userDetails.asObservable();

  getUser(githubUsername: string) {
    const headers = new HttpHeaders({
      Authorization: `token ${environment.githubToken}`,
    });
    this.httpClient
      .get(`https://api.github.com/users/${githubUsername}`, { headers })
      .subscribe((data) => {
        this.userDetails.next(data);
        this.showDetailsLoading = false;
      });
  }

  async getRepos(githubUsername: string) {
    await octokit
      .request(`GET /users/${githubUsername}/repos`, {
        username: githubUsername,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      })
      .then((data) => {
        this.repositoriesSubject.next(data.data);
        this.showReposLoading = false;
      });
  }
}
