import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularFrontProject';
  sideBerOpen=true;
  sideBarToggler() {
    this.sideBerOpen = !this.sideBerOpen;
  }
}
