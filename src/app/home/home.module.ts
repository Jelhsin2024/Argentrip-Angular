import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { VuelosComponent } from './vuelos/vuelos.component';

@NgModule({
  declarations:[
    VuelosComponent,
    PaquetesComponent
  ],
  imports: [
    CommonModule,
    
    HomeRoutingModule
  ]
})
export class HomeModule { }
