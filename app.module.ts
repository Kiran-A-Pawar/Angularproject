import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrdersModule } from './orders/orders.module';
import { from } from 'rxjs';

import {SiteFrameworkModule} from './site-framework/site-framework.module';
import{ProductsModule} from './products/products.module'
import {HttpClientModule} from '@angular/common/http';
import{FormsModule}from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,OrdersModule,SiteFrameworkModule,ProductsModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
