import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';

const appRouters: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },

  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [AppComponent, HomeComponent, CartComponent, ContactComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRouters)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
