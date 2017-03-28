import { Component } from '@angular/core';
import {GithubService} from './services/github.service';

@Component({
  selector: 'my-app',
  template: 
  `<div class="container">
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">
          GithubSearch
        </a>
      </div>
    </div>   
  </nav>
  </div><br><br><br><br>
  <div class="container">
  <profile></profile>
  </div>`,
  providers: [GithubService]
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
 
}
