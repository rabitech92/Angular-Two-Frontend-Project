import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPrintModule } from 'ngx-print';
import { HeaderComponent } from './component/header/header.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProductComponent } from './admin/product/product.component';


import {MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule } from '@angular/material/menu';
import {MatIconModule } from '@angular/material/icon';
import {MatDividerModule } from '@angular/material/divider';
import {MatListModule } from '@angular/material/list';
import {LoginComponent } from './component/login/login.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';



import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRippleModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';





import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
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
import { PaymentComponent } from './admin/payment/payment.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './admin/home/home.component';
import { AddInvoiceComponent } from './components/add-invoice/add-invoice.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoicesTotalComponent } from './components/invoices-total/invoices-total.component';
import { HomeInvoiceComponent } from './components/home-invoice/home-invoice.component';
import { MaininvoiceComponent } from './components/maininvoice/maininvoice.component';
import { ViewinvoiceComponent } from './admin/viewinvoice/viewinvoice.component';
import { CartComponent } from './component/cart/cart.component';




@NgModule({
  declarations: [
    AppComponent,
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
    HomeComponent,
  
    PaymentComponent,
    FooterComponent,
    AddInvoiceComponent,
    DialogComponent,
    InvoiceComponent,
    InvoicesTotalComponent,
    HomeInvoiceComponent,
    MaininvoiceComponent,
    ViewinvoiceComponent,
    CartComponent,
   
  
  
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPrintModule,

    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatRippleModule,
    MatCheckboxModule,
    MatDialogModule,
    


    
    

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
