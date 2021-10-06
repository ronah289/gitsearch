import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';


import { User } from '../user';
import { Repository } from '../repository';

@Injectable({
  providedIn: 'root'
})
export class GitserviceService {
  user!: User;
  repository!: Repository;

  constructor(private http:HttpClient) { 
    this.user = new User('','','','',0,0,0,'','',new Date(),)
    this.repository = new Repository('','','','',)
  }
  // handle a user name input
  findUser(whatToSearch:any){
    interface GithubApi{
      login:string,
      html_url:string,
      repos_url:string,
      name:string,
      public_repos:number,
      followers:number,
      following:number,
      bio:string,
      avatar_url:string,
      created_at:Date,
    }
    let headers = new HttpHeaders({'Authorization':'token' + environment.pass})
    let searchFor = environment.baseUrl + whatToSearch ;
    let inHead={headers:headers}
    let promise = new Promise((resolve, reject) => {
      this.http.get<GithubApi>(searchFor,inHead).toPromise().then((response) => { this.user = response;
            
            resolve(resolve);
            console.log(this.user)
          },
          (error) => {
            reject();
            console.log(error)
          }
        );
    });
    return promise;
  }
  //end of user processor

  // handle repository search
  showRepositories(user:any){
    interface GithubApi{
      html_url:string,
      description:string,
      language:string,
      homepage:string
    }
    let headers = new HttpHeaders({'Authorization':'token' + environment.pass})
    let inHead={headers:headers}
    let url = environment.baseUrl  + user + '/repos';
    let promise = new Promise((resolve, reject) => {
      this.http.get<GithubApi>(url,inHead).toPromise().then(response => {
        this.repository = response;
        resolve(resolve)
  
      }, error => {
        reject();
        console.log(error)
      })
  
    });
    return promise
  }
  // end of repositories processor
}
