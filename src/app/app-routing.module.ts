import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccounceComponent } from './admin/accounce/accounce.component';
import { AdminComponent } from './admin/admin/admin.component';
import { CustomerComponent } from './admin/customer/customer.component';
import { HomeComponent } from './admin/home/home.component';
import { PaymentComponent } from './admin/payment/payment.component';
import { ProductComponent } from './admin/product/product.component';
import { ProductlistComponent } from './admin/productlist/productlist.component';
import { SellerComponent } from './admin/seller/seller.component';



import { ShopComponent } from './admin/shop/shop.component';
import { StockComponent } from './admin/stock/stock.component';
import { UserComponent } from './admin/user/user.component';

import { CartComponent } from './component/cart/cart.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DelivaryComponent } from './component/delivary/delivary.component';
import { LoginComponent } from './component/login/login.component';
import { OrderComponent } from './component/order/order.component';
import { ProductCatagoryComponent } from './component/product-catagory/product-catagory.component';
import { AddInvoiceComponent } from './components/add-invoice/add-invoice.component';
import { InvoiceComponent } from './components/invoice/invoice.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product', component: ProductComponent },
  { path: 'home', component: HomeComponent },
  { path: 'product-catagory', component: ProductCatagoryComponent },
  
  { path: 'cart', component: CartComponent},
  
  
  
  {path: 'stock', component: StockComponent },
  {path :'shop', component:ShopComponent},
  {path :'productlist', component:ProductlistComponent},
  {path :'accounce', component:AccounceComponent},
  {path :'customer', component:CustomerComponent},
  
  {path :'delivary', component:DelivaryComponent},
  {path :'order', component:OrderComponent},
  {path :'user', component:UserComponent},
  {path :'seller', component:SellerComponent},
  {path :'payment', component:PaymentComponent},
  {path :'addinvoice', component:AddInvoiceComponent},
  {path :'invoice', component:InvoiceComponent},
  {path :'admin', component:AdminComponent},
  
  
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
