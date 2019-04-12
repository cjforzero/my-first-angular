import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  // template: `
  // <h1>{{title}}</h1>
  // <h2>My favorite hero is: {{myHero}}</h2>`
})
export class AppComponent {
  title = 'my angular demo~';
  myHero = 'Windstrom';
}
