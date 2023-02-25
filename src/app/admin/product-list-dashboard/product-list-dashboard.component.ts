import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list-dashboard',
  templateUrl: './product-list-dashboard.component.html',
  styleUrls: ['./product-list-dashboard.component.css']
})
export class ProductListDashboardComponent {
  title = 'AngularFrontProject';
  sideBerOpen=true;
  sideBarToggler() {
    this.sideBerOpen = !this.sideBerOpen;
  }

}
