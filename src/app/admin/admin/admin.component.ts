import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  title = 'AngularFrontProject';
  sideBerOpen=true;
  sideBarToggler() {
    this.sideBerOpen = !this.sideBerOpen;
  }

}
