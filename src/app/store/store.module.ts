import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './pages/store/store.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { IonContent } from '@ionic/angular/standalone';
import { SharedModule } from '../shared/shared.module';
import { NavStoreComponent } from './nav-store/nav-store.component';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../shared/nav/nav.component';


@NgModule({
  declarations: [
    StoreComponent,
    ProductComponent,
    ProductDetailComponent,
    NavStoreComponent,

  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    IonContent,
    SharedModule,
    
  ],
  exports:[
    NavStoreComponent
  ]

})
export class StoreModule { }
