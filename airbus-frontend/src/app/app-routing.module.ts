import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CategorywiseProductsComponent } from './categorywise-products/categorywise-products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  { path: '', component: ProductComponent,canActivate:[AuthGaurdService] },
  { path: 'add', component: AddProductComponent,canActivate:[AuthGaurdService]},
  { path: 'update', component: UpdateProductComponent },
  { path: 'byCategory', component: CategorywiseProductsComponent,canActivate:[AuthGaurdService]},
  { path: 'header', component: HeaderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
