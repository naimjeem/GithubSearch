import { Injectable  } from '@angular/core';
import { Http, Headers } from '@angular/http';
import  'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username: string;
    private client_id: 'YOUR CLIENT ID';
    private client_secret: 'YOUR CLIENT SCTRET CODE';

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
