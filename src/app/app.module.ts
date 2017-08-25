import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BuyersComponent } from './components/buyers/buyers.component';
import { ProductsComponent } from './components/products/products.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/buyers',
    pathMatch: 'full'
  },
  {
    path: 'buyers',
    component: BuyersComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BuyersComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
        appRoutes
    ),
    FormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

export class AppRoutingModule { }