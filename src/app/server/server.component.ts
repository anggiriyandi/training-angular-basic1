import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {

    serverStatus = 'offline';

    constructor() {
        const randomValue = Math.random();
        this.serverStatus = randomValue > 0.5 ? 'online' : 'offline';

    }

    getServerStatus() {
        return this.serverStatus;
    }

    getServerColor() {
        return this.serverStatus === 'offline' ? 'red' : 'green';
    }
}
