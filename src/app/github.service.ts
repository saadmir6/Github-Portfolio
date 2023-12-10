import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repository } from './repository';
import { Organization } from './organization';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  readonly username = 'saadmir6';
  private userURL = 'https://api.github.com/users/' + this.username

  constructor(private http:HttpClient) { }

  getUser() : Observable<User> {
    return this.http.get<User>(this.userURL);
  }

  getRepos() : Observable<Repository[]> {
    return this.http.get<Repository[]>(this.userURL + '/repos')
  }

  getOrganization() : Observable<Organization[]> {
    return this.http.get<Organization[]>(this.userURL + '/orgs')
  }
 }
