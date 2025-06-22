import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { IonContent } from '@ionic/angular/standalone';

import { OfertasComponent } from './ofertas/ofertas.component';
import { AutosComponent } from './autos/autos.component';
import { SharedModule } from '../shared/shared.module';
import { ArticleComponent } from './component/article/article.component';

@NgModule({
  declarations:[
  PaquetesComponent,
  VuelosComponent,
  OfertasComponent,
  AutosComponent,
  ArticleComponent
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
