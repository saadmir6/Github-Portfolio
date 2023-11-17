import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-personel-info',
  templateUrl: './personel-info.component.html',
  styleUrls: ['./personel-info.component.scss']
})
export class PersonelInfoComponent implements OnInit {
  user$ : Observable<User> | undefined

  constructor (private githubService : GithubService) {}

  ngOnInit(): void {
      this.user$ = this.githubService.getUser();
  }
}
