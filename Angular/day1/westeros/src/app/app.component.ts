import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'westeros';

  counter:number = 0;

  bump() {
    this.counter++;
  }

  talk() {
    alert(`成功です!　現在のヴァリューは${this.counter}！`)
  }
}
