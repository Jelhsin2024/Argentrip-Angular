import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './pages/store/store.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { IonContent } from '@ionic/angular/standalone';
import { SharedModule } from '../shared/shared.module';
import { NavStoreComponent } from './nav-store/nav-store.component';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { AutosComponent } from './autos/autos.component';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    StoreComponent,
    ProductComponent,
    ProductDetailComponent,
    NavStoreComponent,
    PaquetesComponent,
    OfertasComponent,
    VuelosComponent,
    AutosComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    IonContent,
    SharedModule,
    
  ]
})
export class StoreModule { }
