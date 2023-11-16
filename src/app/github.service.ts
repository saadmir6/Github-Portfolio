import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  readonly username = 'saadmir6';
  private apiURL = 'https://api.github.com';

  constructor(private http:HttpClient) { }
}
