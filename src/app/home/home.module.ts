import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { IonContent } from '@ionic/angular/standalone';
import { ComponentComponent } from './component/component.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { AutosComponent } from './autos/autos.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations:[
  ComponentComponent,
  PaquetesComponent,
  VuelosComponent,
  OfertasComponent,
  AutosComponent
  ],
  imports: [
    CommonModule,
    IonContent,
    HomeRoutingModule,
    IonContent,
    SharedModule
  ]
})
export class HomeModule { }
