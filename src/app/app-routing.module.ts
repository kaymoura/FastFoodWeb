import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path:'', component:ProductsComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'cart', component:CartComponent}
];

RouterModule.forRoot(routes,
  { enableTracing: true } // <-- debugging purposes only
)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
