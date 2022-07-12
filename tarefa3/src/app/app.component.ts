import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarefa3';
  showSecret = false

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.lenght + 1);
  }
}