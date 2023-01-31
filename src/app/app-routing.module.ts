import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccounceComponent } from './admin/accounce/accounce.component';
import { CustomerComponent } from './admin/customer/customer.component';
import { ProductComponent } from './admin/product/product.component';
import { ProductlistComponent } from './admin/productlist/productlist.component';
import { SellerComponent } from './admin/seller/seller.component';
import { ShopComponent } from './admin/shop/shop.component';
import { StockComponent } from './admin/stock/stock.component';
import { UserComponent } from './admin/user/user.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DelivaryComponent } from './component/delivary/delivary.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { OrderComponent } from './component/order/order.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product', component: ProductComponent },
  { path: 'seller', component: SellerComponent },
  { path: 'stock', component: StockComponent },
  {path :'shop', component:ShopComponent},
  {path :'productlist', component:ProductlistComponent},
  {path :'accounce', component:AccounceComponent},
  {path :'customer', component:CustomerComponent},
  {path :'delivary', component:DelivaryComponent},
  {path :'order', component:OrderComponent},
  {path :'user', component:UserComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
