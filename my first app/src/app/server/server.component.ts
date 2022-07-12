import { Component } from '@angular/core';

@Component({
    selector: 'app-server', 
    templateUrl: './server.component.html'    
}) 
export class ServerComponent {
    serverCreated = 'No server was created' // proprety usadas no html em volta de {{}} quando usado no texto string interpolation
    allowNewServer = true;
    serverId: number = 10;
    serverStatus: string = 'offline';
    inputName = ''
    
    constructor(){
        setTimeout(() => {
            this.allowNewServer = false; //function pega uma property e altera ela ao seu gosto 
        }, 2000);
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
    onCreateServer() {
        this.serverCreated = 'Server was created ' // property binding tem a função de transformar o component em reativo 
    }
    onUpdateInputName(event: Event){
        this.inputName = (<HTMLInputElement>event.target).value
    }
    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red'; 
    }
}
