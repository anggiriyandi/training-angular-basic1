import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverName = 'Test server';
  serverCreationStatus = 'no server created';
  serverCreated = false;

  onServerCreated(event: any) {
    this.serverName = event.target.value;
  }

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onServerAdded() {
    this.serverCreationStatus = 'Server was created with name ' + this.serverName;
    this.serverCreated = true;
  }

  ngOnInit() {
  }

}
