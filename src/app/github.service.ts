import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  readonly username = 'saadmir6';
  private apiURL = 'https://api.github.com';

  constructor(private http:HttpClient) { }

  getUser() : Observable<User> {
    return this.http.get<User>(`${this.apiURL}/users/${this.username}`);
  }
}
