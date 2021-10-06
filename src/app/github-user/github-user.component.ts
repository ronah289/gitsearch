import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GitserviceService } from '../services/gitservice.service';
import { User } from '../user';
import { Repository } from '../repository';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {
  user?: User;
  repository!: Repository | any;

  constructor(private gitService: GitserviceService) {
    this.repository = new Repository('', '', '', '',)

  }
  findThisUser(whatToSearch: any) {
    this.gitService.findUser(whatToSearch).then((success) => {
      this.user = this.gitService.user
    })
    this.gitService.showRepositories(whatToSearch).then((success) => {
      this.repository = this.gitService.repository;
    },
      (error) => {
        console.log(error)
      }
    )
  }

  ngOnInit(): void {
    this.findThisUser('ronah289')
  }

}
