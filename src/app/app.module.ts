import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderComponent } from './layout/header/header.component';
import { NgbModule, NgbToastModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from './components/toast/toast.component';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ConfirmationComponent,
    ProductItemComponent,
    ProductItemDetailComponent,
    ProductListComponent,
    HeaderComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    NgbToastModule,
    NgIf,
    NgTemplateOutlet,
    NgFor,
    NgbTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
