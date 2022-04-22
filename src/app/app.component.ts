import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy  {
  constructor(
    public appService: AppService
  ) {
  }

  title = 'adpuser';
  allUsers: any;
  users: any;

  ngOnInit() {
    this.appService.getUserData().subscribe(data => {
      this.users = data;
      this.allUsers = this.users;
    });
  }

  searchForUser(event: any) {
    let searchValue = event.target.value;
    this.users = this.allUsers.filter((val: any) => {
      return val.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  }

  ngOnDestroy() {

  }
}
