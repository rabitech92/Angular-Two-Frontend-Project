import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProductComponent } from './admin/product/product.component';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './component/login/login.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

import { SellerpanelComponent } from './admin/sellerpanel/sellerpanel.component';
import { ProductlistComponent } from './admin/productlist/productlist.component';
import { ProductheaderComponent } from './admin/productheader/productheader.component';
import { AccounceComponent } from './admin/accounce/accounce.component';
import { DelivaryComponent } from './component/delivary/delivary.component';
import { OrderComponent } from './component/order/order.component';
import { UserComponent } from './admin/user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerComponent } from './admin/seller/seller.component';
import { CustomerComponent } from './admin/customer/customer.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
    LoginComponent,
    ProductComponent,
    SellerpanelComponent,
    ProductlistComponent,
    ProductheaderComponent,
    AccounceComponent,
    DelivaryComponent,
    OrderComponent,
    UserComponent,
    SellerComponent,
    CustomerComponent,
    

    
    
    

    
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
