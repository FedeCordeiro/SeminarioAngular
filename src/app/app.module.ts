import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { InputNumberComponent } from './input-number/input-number.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomeComponent,
    AboutComponent,
    CartComponent,
    InputNumberComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
