import { Injectable  } from '@angular/core';
import { Http, Headers } from '@angular/http';
import  'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username: string;
    private client_id: 'e48d97329d004dbaddf3';
    private client_secret: '4c76759ed09a6fc6d4808b54b71ef946c115b1ac';

    constructor(private _http: Http) {
        console.log('GithubService is ready...');
        this.username = 'naimjeem';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'?client_secret='+this.client_secret).map(res => res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'?client_secret='+this.client_secret).map(res => res.json());
    }

    updateUser(username:string){
        this.username = username;
    }
}
