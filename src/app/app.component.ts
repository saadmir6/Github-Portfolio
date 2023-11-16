import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'gh-portfolio';
  username = " ";

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
      this.username = this.githubService.username; // so that the component uses the GithubService username
  }
}
