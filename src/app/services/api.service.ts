import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap, throwError } from 'rxjs';
import { Octokit } from 'octokit';
const octokit = new Octokit({
  auth: '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',
});
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  // observable for repositories
  private repositoriesSubject: BehaviorSubject<any[]> = new BehaviorSubject<
    any[]
  >([]);
  repositories$: Observable<any[]> = this.repositoriesSubject.asObservable();
  // observable for user details
  private userDetails: BehaviorSubject<any> = new BehaviorSubject<any[]>([]);
  details$: Observable<any> = this.userDetails.asObservable();

  getUser(githubUsername: string) {
    this.httpClient
      .get(`https://api.github.com/users/${githubUsername}`)
      .subscribe((data) => {
        this.userDetails.next(data);
      });
  }

  async getRepos(githubUsername: string) {
    await octokit
      .request(`GET /users/${githubUsername}/repos`, {
        username: githubUsername,
        per_page: 10,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      })
      .then((data) => {
        this.repositoriesSubject.next(data.data);
      });
  }
}
// maintain pagination
